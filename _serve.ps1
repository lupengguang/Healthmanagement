# Simple static HTTP server using PowerShell HttpListener
$root = $PSScriptRoot
$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/ (Ctrl+C to stop)"

$mimes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.png'  = 'image/png'
  '.gif'  = 'image/gif'
  '.webp' = 'image/webp'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.json' = 'application/json; charset=utf-8'
  '.woff' = 'font/woff'
  '.woff2'= 'font/woff2'
  '.ttf'  = 'font/ttf'
  '.mp4'  = 'video/mp4'
  '.webm' = 'video/webm'
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response

    $raw = $req.Url.AbsolutePath
    if ($raw -eq '/') { $raw = '/index.html' }
    $path = [System.IO.Path]::GetFullPath((Join-Path $root $raw))

    # Prevent path traversal outside root
    if (-not $path.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
      $res.StatusCode = 403
      $res.Close()
      continue
    }

    if ([System.IO.File]::Exists($path)) {
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      $mime = if ($mimes.ContainsKey($ext)) { $mimes[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $res.ContentType = $mime
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host "200 $raw ($mime)"
    } else {
      $res.StatusCode = 404
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $raw")
      $res.ContentType = 'text/plain; charset=utf-8'
      $res.ContentLength64 = $body.Length
      $res.OutputStream.Write($body, 0, $body.Length)
      Write-Host "404 $raw"
    }
    $res.Close()
  }
}
finally {
  $listener.Stop()
}
