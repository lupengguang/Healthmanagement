/* ═══════════════════════════════════════════════════════════
   动衡智助 — 训练项目详情数据
   program-detail.html 通过 ?id=pXX 读取 PROJECTS[id] 渲染
   动作示范图按需通过 text_to_image 生成，仅加载当前项目动作
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const demo = p =>
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
    encodeURIComponent(p) + '&image_size=portrait_4_3';

  window.PROJECTS = {

    /* ─────────── 01 女性塑形 ─────────── */
    p01: {
      num: '01',
      name: '女性塑形',
      tags: ['塑形', '哑铃', '进阶', '20分钟'],
      level: '进阶', dur: '20分钟', cycle: '4周计划', moveCount: '6个动作',
      cover: 'images/program-female.jpg',
      coverAlt: '女性在健身房进行哑铃划船训练',
      intro: '针对女性身体特点设计，以哑铃划船、臀桥、核心稳定动作为主，科学塑形不粗壮，打造紧致有线条的健康体态。女性睾酮水平仅为男性的1/15左右，常规哑铃训练并不会练出大块肌肉，反而通过适度阻力刺激提升肌肉线条感与基础代谢，让身体在静息状态下也持续消耗热量。',
      who: [
        '希望改善身材线条、追求紧致体态的女性',
        '担心"练出肌肉块"、只敢做有氧的女性',
        '有一定训练基础、能完成标准自重动作的人群',
        '久坐办公室、臀腿松弛无力、代谢偏低的人群'
      ],
      effect: [
        '强化臀腿、背部与核心肌群，塑造紧致肌肉线条',
        '提升基础代谢率，形成"易瘦体质"，静息状态下持续燃脂',
        '改善圆肩含胸与骨盆位置，体态挺拔气质提升',
        '坚持4周可见围度变化，臂、背、臀线条明显紧致'
      ],
      weeks: [
        { t: '第1周 · 适应期', sub: '建立动作模式', list: ['单臂哑铃划船 3组×12次/侧', '徒手臀桥 3组×15次', '高脚杯深蹲（轻哑铃）3组×12次', '死虫式 3组×10次/侧'] },
        { t: '第2周 · 强化期', sub: '渐进加重', list: ['单臂哑铃划船 4组×12次/侧', '哑铃臀桥（负重）4组×12次', '高脚杯深蹲 4组×10次', '平板支撑 3组×40秒'] },
        { t: '第3周 · 突破期', sub: '复合与不平衡', list: ['哑铃划船+俯身飞鸟超级组 3组×10次', '单腿臀桥 3组×10次/侧', '哑铃肩上推举 3组×12次', '侧平板支撑 3组×30秒/侧'] },
        { t: '第4周 · 雕刻期', sub: '循环巩固', list: ['4个主力动作循环×3轮', '组间休息缩短至45秒', '收尾：平板支撑力竭×2组', '拍照对比、测量围度记录变化'] }
      ],
      moves: [
        {
          name: '单臂哑铃划船', img: demo('Fitness demonstration photo, athletic woman in red leggings and white tank top performing single-arm dumbbell row, one knee and hand on bench, flat back, gym background with dumbbell rack, professional studio lighting, side view'),
          steps: ['俯身单膝跪撑于凳上，背部平直与地面平行，核心收紧', '哑铃沿体侧垂直拉向髋部，肩胛骨主动后缩，大臂贴身', '顶端停顿1秒感受背肌收缩，再缓慢下放还原'],
          errs: ['耸肩借力，斜方肌上部过度参与', '转腰甩背，用旋转惯性代替背部发力', '背部拱起、腹部松弛，腰椎受压']
        },
        {
          name: '哑铃臀桥', img: demo('Fitness demonstration photo, athletic woman performing hip thrust with dumbbell on hips, shoulders on bench, glutes squeezed at top, dark gym background, professional lighting, side view'),
          steps: ['上背靠稳凳沿，哑铃置于髋部，双脚踩实与肩同宽', '臀部发力将髋向上推起至躯干与大腿接近平行', '顶端臀部完全收紧停顿1秒，缓慢下放'],
          errs: ['腰椎过度反弓，用下背代偿发力', '脚跟离地或距离过远，大腿后侧抽筋', '顶端未停顿，臀部刺激不充分']
        },
        {
          name: '高脚杯深蹲', img: demo('Fitness demonstration photo, athletic woman performing goblet squat holding one dumbbell vertically at chest, upright torso, deep squat position, gym background, professional lighting, front view'),
          steps: ['双手捧哑铃于胸前，双脚与肩同宽脚尖略外展', '屈髋下蹲至大腿平行地面，膝盖与脚尖方向一致', '脚跟发力站起，顶端收紧臀部与核心'],
          errs: ['膝盖内扣，增加膝关节压力', '含胸弓背，哑铃远离身体重心', '脚跟离地，重心前移至脚尖']
        },
        {
          name: '哑铃肩上推举', img: demo('Fitness demonstration photo, athletic woman performing seated dumbbell shoulder press, arms extended overhead, core braced, dark gym background, professional lighting, front view'),
          steps: ['坐姿挺胸，哑铃举至肩侧，肘部略低于肩', '核心收紧，垂直向上推起哑铃至手臂接近伸直', '缓慢下放至起始位，全程不耸肩'],
          errs: ['腰部反弓借力，应收紧核心保持肋骨下沉', '推举轨迹前后晃动', '下放过快失去控制']
        },
        {
          name: '死虫式', img: demo('Fitness demonstration photo, woman performing dead bug core exercise lying on yoga mat, opposite arm and leg extended, lower back pressed to floor, studio lighting, top side view'),
          steps: ['仰卧举腿屈膝90度，手臂垂直指向天花板', '下背贴实地垫，对侧手脚缓慢伸展放低', '呼气收回，交替进行，节奏保持匀速'],
          errs: ['下背离地拱起，核心失去张力', '动作过快，靠惯性甩动', '憋气，应保持匀速呼吸']
        },
        {
          name: '平板支撑', img: demo('Fitness demonstration photo, athletic woman holding plank position on yoga mat, straight body line from head to heels, core engaged, dark studio background, professional lighting, side view'),
          steps: ['前臂撑地，肘部位于肩正下方，双脚并拢', '身体从头到脚呈一条直线，臀部与腹部同时收紧', '保持匀速呼吸，坚持规定时间'],
          errs: ['塌腰撅臀，腰椎受压', '肩胛下陷，肩部吃力过多', '抬头或垂头，颈椎不在中立位']
        }
      ],
      notes: [
        '训练前进行5分钟动态热身，激活肩、髋、膝',
        '选择能标准完成规定次数的重量，宁轻勿重',
        '生理期可降低强度或改为徒手版本，避免倒立类动作',
        '组间休息45-60秒，全程保持呼吸顺畅不憋气'
      ],
      taboo: [
        '孕期及产后未满42天的女性',
        '腰椎间盘突出急性发作期人群',
        '血压、心脏疾病未得到有效控制者',
        '感冒发热或身体极度疲劳时暂停训练'
      ]
    },

    /* ─────────── 02 圆肩驼背改善 ─────────── */
    p02: {
      num: '02',
      name: '圆肩驼背改善',
      tags: ['体态改善', '无器械', '入门', '15分钟'],
      level: '入门', dur: '15分钟', cycle: '4周计划', moveCount: '6个动作',
      cover: 'images/program-shoulder.jpg',
      coverAlt: '背部拉伸与YTW推举训练展示',
      intro: '针对久坐人群常见的含胸驼背问题，通过胸肌放松、背部强化、胸椎拉伸三维度，系统改善体态，打开肩部，挺直腰背。圆肩驼背的本质是"前面紧、后面弱"的肌力失衡——胸小肌与胸大肌长期缩短，中下斜方肌与菱形肌薄弱无力，本计划从三个维度同时入手打破失衡。',
      who: [
        '长期久坐伏案的上班族与学生',
        '正面看双肩内扣、侧面看上背后凸的人群',
        '背部薄弱、胸肌紧张、肩部活动受限的人群',
        '希望改善体态、提升个人气质的人群'
      ],
      effect: [
        '放松缩短紧张的胸大肌、胸小肌与胸前筋膜',
        '强化中下斜方肌、菱形肌与肩袖稳定肌群',
        '改善胸椎后凸曲度，恢复脊柱中立排列',
        '4周后可见肩部打开、背部挺直、身姿挺拔的明显变化'
      ],
      weeks: [
        { t: '第1周 · 放松激活', sub: '打开活动度', list: ['胸肌门框拉伸 3组×30秒/侧', '靠墙天使 3组×10次', '收下巴 3组×10次', '猫牛式 2组×10次'] },
        { t: '第2周 · 背部唤醒', sub: '找回肩胛感知', list: ['YTW推举 3组×每式8次', '小燕飞 3组×12次', '胸肌门框拉伸 2组×30秒', '靠墙天使 3组×12次'] },
        { t: '第3周 · 强化整合', sub: '力量与拉伸并进', list: ['俯卧W收肩 3组×10次', '小燕飞 3组×15次', '胸椎旋转拉伸 2组×8次/侧', '靠墙天使 4组×12次'] },
        { t: '第4周 · 习惯巩固', sub: '融入日常', list: ['完整流程每日1次', '靠墙站立训练 2组×2分钟', '每小时工位姿势自检', '拍照对比记录体态变化'] }
      ],
      moves: [
        {
          name: '胸肌门框拉伸', img: demo('Fitness demonstration photo, man stretching chest muscles in door frame, forearm against frame, body leaning forward, relaxed posture, home background, natural lighting, side view'),
          steps: ['前臂贴门框，肘部与肩同高略低于肩', '身体缓慢前倾转对侧，感受胸前明显牵拉', '保持30秒匀速呼吸，换边进行'],
          errs: ['手肘高过肩膀，肩关节受压', '身体下塌代偿，牵拉感消失', '憋气或拉伸感刺痛']
        },
        {
          name: '靠墙天使', img: demo('Fitness demonstration photo, person performing wall angel exercise, back flat against wall, arms sliding up and down like snow angel, home background, natural lighting, front view'),
          steps: ['背部、头、臀贴墙站立，双脚离墙半步', '屈肘90度贴墙，手臂沿墙缓慢上滑再滑回', '全程手腕手肘尽量不离开墙面'],
          errs: ['腰部离开墙面拱起', '手臂强行上滑导致耸肩', '头部前伸离开墙面']
        },
        {
          name: 'YTW推举', img: demo('Fitness demonstration photo, man lying prone on bench performing Y-T-W shoulder blade exercise with arms in Y T W positions, back muscles engaged, gym background, side view'),
          steps: ['俯卧（可俯身站立），双臂依次摆出Y、T、W三个字母形状', '每个形状下肩胛骨主动后缩下沉，拇指朝上', '每种形状保持2秒后切换，感受背部发力'],
          errs: ['耸肩，斜方肌上部代偿', '手臂高于肩过多，肩峰撞击', '腰部反弓借力']
        },
        {
          name: '小燕飞', img: demo('Fitness demonstration photo, man performing superman back extension lying prone on yoga mat, chest and arms lifted off floor, back muscles engaged, studio lighting, side view'),
          steps: ['俯卧垫上，双臂前伸或置于体侧', '上背部发力将胸口抬离地面，下巴微收', '顶端停顿2秒，缓慢下放'],
          errs: ['用手臂猛甩带动身体', '头部过度后仰挤压颈椎', '抬起过高、腰椎过度伸展']
        },
        {
          name: '收下巴', img: demo('Fitness demonstration photo, person performing chin tuck exercise sitting upright, drawing head back to align ears over shoulders, clean home background, natural lighting, side view'),
          steps: ['坐直目视前方，下颌水平向后收（做出"双下巴"）', '保持5秒感受颈后发力，再缓慢放松', '耳垂对齐肩峰即为正确位置'],
          errs: ['低头代替收下巴', '动作幅度过大变成仰头', '耸肩紧张']
        },
        {
          name: '猫牛式', img: demo('Fitness demonstration photo, woman performing cat cow stretch on yoga mat on all fours, arching and rounding spine, studio lighting, side view'),
          steps: ['四点跪姿，手腕在肩下方、膝盖在髋下方', '吸气塌腰抬头（牛式），呼气拱背低头（猫式）', '缓慢流畅地交替，感受脊柱逐节活动'],
          errs: ['动作过快变成甩动', '手肘弯曲，支撑不稳', '颈部过度后仰']
        }
      ],
      notes: [
        '拉伸以"明显牵拉感但可正常呼吸"为度，不要追求疼痛',
        '背部训练动作顶峰停顿2秒，效果远快于次数堆砌',
        '改善体态的关键在日常姿势，建议工位设置整点提醒',
        '每天15分钟，坚持4周以上才有可见改变'
      ],
      taboo: [
        '强直性脊柱炎等脊柱疾病患者请遵医嘱训练',
        '肩袖损伤急性期禁止做YTW推举类动作',
        '颈椎病急性发作期暂停收下巴与颈部相关动作',
        '训练中出现手臂麻木应立即停止并就医评估'
      ]
    },

    /* ─────────── 03 骨盆前倾矫正 ─────────── */
    p03: {
      num: '03',
      name: '骨盆前倾矫正',
      tags: ['体态改善', '瑜伽垫', '进阶', '20分钟'],
      level: '进阶', dur: '20分钟', cycle: '4周计划', moveCount: '6个动作',
      cover: 'images/program-functional.jpg',
      coverAlt: '核心训练动作展示',
      intro: '针对腰椎过度前凸、小腹前凸的骨盆前倾问题，强化腹肌与臀肌，放松髂腰肌与下背，重建骨盆中立位。骨盆前倾的典型表现是"翘臀与小腹并存"——髂腰肌与竖脊肌紧张缩短，腹直肌与臀大肌薄弱拉长，本计划通过"松紧张的、练薄弱的"双向调整恢复骨盆中立。',
      who: [
        '小腹前凸、腰椎明显前凹、假性"翘臀"的人群',
        '长期久坐、髋部屈肌紧张紧绷的上班族',
        '穿高跟鞋多、站立时腰部易酸痛的女性',
        '核心力量薄弱、臀肌失忆的人群'
      ],
      effect: [
        '放松紧张的髂腰肌与下背部竖脊肌',
        '激活并强化腹直肌、臀大肌，重建前后肌力平衡',
        '骨盆回正后小腹视觉内收，腰痛明显缓解',
        '建立正确的站姿与步态模式，防止反弹'
      ],
      weeks: [
        { t: '第1周 · 放松激活', sub: '松解紧张链', list: ['跪姿髂腰肌拉伸 3组×30秒/侧', '猫牛式 2组×10次', '死虫式 3组×10次/侧', '臀桥 3组×15次'] },
        { t: '第2周 · 核心唤醒', sub: '学会骨盆后倾', list: ['仰卧骨盆后倾练习 3组×15次', '死虫式 3组×12次/侧', '臀桥（顶端停顿）3组×15次', '髂腰肌拉伸 2组×30秒/侧'] },
        { t: '第3周 · 力量强化', sub: '静态与动态并进', list: ['平板支撑 3组×45秒', '反向卷腹 3组×12次', '单腿臀桥 3组×10次/侧', '髂腰肌拉伸 2组×30秒/侧'] },
        { t: '第4周 · 模式重建', sub: '站姿走姿固化', list: ['完整流程每日1次', '靠墙站姿训练 2组×2分钟', '日常收腹提肛练习', '拍照对比骨盆位置变化'] }
      ],
      moves: [
        {
          name: '死虫式', img: demo('Fitness demonstration photo, woman performing dead bug core exercise on yoga mat, lower back flat on floor, opposite arm and leg extended slowly, studio lighting, top side view'),
          steps: ['仰卧屈髋屈膝90度，下背用力贴实地垫', '对侧手脚缓慢伸展放低但不接触地面', '呼气收回，保持下背始终贴地'],
          errs: ['下背拱起离开地面', '伸展侧放得过低失去控制', '速度过快靠惯性完成']
        },
        {
          name: '臀桥', img: demo('Fitness demonstration photo, woman performing glute bridge on yoga mat, hips lifted, body in straight line from shoulders to knees, glutes squeezed, studio lighting, side view'),
          steps: ['仰卧屈膝，双脚踩实与髋同宽', '臀部发力顶起髋部至肩-髋-膝一条线', '顶端收紧臀部停顿2秒，缓慢下放'],
          errs: ['腰椎过度反弓代替臀部发力', '双脚距离过远，腘绳肌抽筋', '顶端不停顿，刺激打折']
        },
        {
          name: '跪姿髂腰肌拉伸', img: demo('Fitness demonstration photo, person performing half kneeling hip flexor stretch, one knee on mat, glutes squeezed, torso upright, pelvis tucked, studio lighting, side view'),
          steps: ['弓步跪姿，前腿屈膝90度，后膝着地', '收紧臀部、骨盆后倾，重心缓慢前移', '感受大腿前侧与髋前侧的牵拉，保持30秒'],
          errs: ['腰部反弓代替髋部前移', '臀部未收紧，拉伸感打折', '重心压在前膝造成膝盖疼痛']
        },
        {
          name: '猫牛式', img: demo('Fitness demonstration photo, woman performing cat cow spinal mobility exercise on all fours on yoga mat, rounding and arching lower back slowly, studio lighting, side view'),
          steps: ['四点跪姿，脊柱保持中立起始', '呼气时骨盆后倾、腰椎逐节拱起', '吸气还原并轻微塌腰，全程缓慢'],
          errs: ['只动胸椎，腰椎段没参与', '动作过快，失去控制', '手腕压力过大应掌根压实']
        },
        {
          name: '反向卷腹', img: demo('Fitness demonstration photo, woman performing reverse crunch on yoga mat, knees bent pulled toward chest, hips lifting off mat, lower abs engaged, studio lighting, side view'),
          steps: ['仰卧屈膝抬腿，双臂贴地稳定', '下腹发力将膝盖向胸口收，髋部离地', '缓慢下放，腰椎始终贴地'],
          errs: ['用腿的摆动惯性代替腹部发力', '头部前伸、脖子用力', '下放过快失去离心控制']
        },
        {
          name: '平板支撑', img: demo('Fitness demonstration photo, woman holding forearm plank on yoga mat with pelvis slightly tucked, straight line from head to heels, studio lighting, side view'),
          steps: ['前臂撑地，肘部在肩正下方', '骨盆微微后倾，臀部腹部同时收紧', '从头到脚一条直线，匀速呼吸'],
          errs: ['塌腰（会加重骨盆前倾）', '撅臀代偿', '坚持过久导致动作变形']
        }
      ],
      notes: [
        '所有核心动作都要求下背贴地，这是本计划的核心要领',
        '拉伸髂腰肌时务必先收紧臀部，否则拉伸无效',
        '训练后避免立即久坐，站立时保持骨盆中立',
        '骨盆位置的改善通常需要4-8周，请耐心坚持'
      ],
      taboo: [
        '孕期女性禁止腹部加压与俯卧类动作',
        '腰椎滑脱、椎间盘突出急性期人群',
        '髋关节损伤或术后未恢复者',
        '训练中腰部刺痛、下肢放射麻木应立即停止'
      ]
    },

    /* ─────────── 04 居家全身燃脂 ─────────── */
    p04: {
      num: '04',
      name: '居家全身燃脂',
      tags: ['减脂', '无器械', '进阶', '25分钟'],
      level: '进阶', dur: '25分钟', cycle: '8周计划', moveCount: '6个动作',
      cover: 'images/program-cardio.jpg',
      coverAlt: '高强度间歇训练动作展示',
      intro: '无需器械的高强度间歇训练（HIIT），通过多关节复合动作快速提升心率，高效燃烧脂肪，同时改善心肺功能。采用"30秒全力+15秒休息"的间歇结构，训练结束后身体仍维持较高的摄氧量（EPOC效应），运动后12-24小时内持续多消耗热量。',
      who: [
        '希望高效减脂、时间有限的上班族',
        '有一定运动基础、能完成中等强度训练的人群',
        '想去健身房却没条件、偏好居家训练的人群',
        '需要提升心肺耐力与代谢水平的人群'
      ],
      effect: [
        '每次训练消耗300-450大卡，高效制造热量缺口',
        'EPOC效应让运动后持续燃脂12小时以上',
        '提升心肺功能与运动表现，静息心率下降',
        '全身多肌群参与，减脂同时保留肌肉线条'
      ],
      weeks: [
        { t: '第1-2周 · 建立基础', sub: '4动作×3轮', list: ['开合跳、高抬腿、原地箭步蹲、登山跑', '每个动作30秒，动作间休息15秒', '轮间休息90秒，共3轮', '每周训练4次，隔天进行'] },
        { t: '第3-4周 · 提升强度', sub: '加入波比跳', list: ['5动作循环×4轮，加入波比跳', '运动30秒+休息15秒不变', '轮间休息缩短至75秒', '每周训练4-5次'] },
        { t: '第5-6周 · 冲刺燃脂', sub: '全程6动作', list: ['6动作循环×4轮', '运动35秒+休息15秒', '轮间休息60秒', '配合每日饮水2L与饮食控制'] },
        { t: '第7-8周 · 巩固成果', sub: '维持与进阶', list: ['6动作×5轮挑战', '尝试减少轮间休息', '每周体脂与围度记录', '达成目标后改为每周3次维持'] }
      ],
      moves: [
        {
          name: '开合跳', img: demo('Fitness demonstration photo, athletic person performing jumping jacks, arms overhead, legs apart mid-jump, dynamic motion, home living room background, bright lighting, front view'),
          steps: ['站立起跳同时双脚分开、双手头顶击掌', '再跳回并拢，节奏均匀', '前脚掌落地，膝盖微屈缓冲'],
          errs: ['脚跟重重落地，膝盖冲击大', '手臂未完全举过头顶', '弯腰驼背']
        },
        {
          name: '波比跳', img: demo('Fitness demonstration photo, athletic person mid burpee jump with arms overhead, dynamic full body movement, home background, bright lighting, side view'),
          steps: ['下蹲双手撑地，双脚向后跳成平板', '完成一次俯卧撑（可选），双脚跳回蹲姿', '垂直向上跳起击掌，落地缓冲重复'],
          errs: ['塌腰撅臀，平板阶段核心松弛', '跳回时脚落位太远，下背代偿', '全程无节奏、忽快忽慢']
        },
        {
          name: '高抬腿', img: demo('Fitness demonstration photo, person performing high knees running in place, knee lifted to hip height, core upright, home background, bright lighting, front view'),
          steps: ['原地快速交替抬腿，膝盖抬至髋部高度', '手臂配合摆动，重心前倾少许', '前脚掌着地，保持弹性节奏'],
          errs: ['膝盖未抬到髋部高度，强度不足', '上身后仰', '全脚掌沉重落地']
        },
        {
          name: '深蹲跳', img: demo('Fitness demonstration photo, athletic person mid air jump squat, legs extended, arms down, dynamic explosive movement, home background, side view'),
          steps: ['下蹲至大腿接近平行地面', '下肢爆发向上跳起，身体伸展', '落地缓冲立即进入下次深蹲'],
          errs: ['落地膝盖内扣或直腿硬着陆', '蹲得过浅就起跳', '落地后无缓冲连续冲击膝盖']
        },
        {
          name: '登山跑', img: demo('Fitness demonstration photo, person in plank position performing mountain climbers, alternating knees driving toward chest, fast pace, home background, side view'),
          steps: ['平板支撑起始，肩在腕正上方', '双腿快速交替将膝盖拉向胸口', '臀部保持水平，不上下晃动'],
          errs: ['臀部抬得过高，变成俯撑姿势', '肩部位置偏移超过手腕', '节奏忽快忽慢']
        },
        {
          name: '原地箭步蹲', img: demo('Fitness demonstration photo, person performing alternating reverse lunge in place, front knee at 90 degrees, torso upright, home background, front view'),
          steps: ['单腿向后撤步下蹲，前膝90度后膝接近地面', '前腿发力站起收回，交替进行', '躯干保持正直，核心收紧'],
          errs: ['前膝超过脚尖过多', '身体前倾弓背', '膝盖内扣']
        }
      ],
      notes: [
        '训练前必须完成5分钟动态热身，防止拉伤',
        '关节有"咕"响或轻微不适属正常，出现疼痛立即停止',
        'HIIT强度大，每周留至少2天休息恢复',
        '配合热量缺口饮食，减脂效果才能兑现'
      ],
      taboo: [
        '心脑血管疾病、高血压未控制者严禁HIIT',
        '膝、踝关节损伤未完全恢复的人群',
        '孕期女性',
        'BMI≥32或长期零运动基础者应从低强度开始'
      ]
    },

    /* ─────────── 05 核心力量强化 ─────────── */
    p05: {
      num: '05',
      name: '核心力量强化',
      tags: ['力量', '瑜伽垫', '高阶', '20分钟'],
      level: '高阶', dur: '20分钟', cycle: '6周计划', moveCount: '6个动作',
      cover: 'images/hero-trainer.jpg',
      coverAlt: '核心训练平板支撑特写',
      intro: '系统强化腹直肌、腹斜肌、腹横肌及下背部肌群，提升核心稳定性，改善体态根基，预防运动损伤。核心不是"练出腹肌"，而是构建躯干传递力量的刚性通道——所有动作强调"稳定优先于次数"，从抗伸展、抗侧屈、抗旋转三个维度全面构建核心刚度。',
      who: [
        '有一定训练基础、希望突破平台期的健身者',
        '深蹲、硬拉等大重量动作中腰部不稳的人群',
        '核心薄弱、久坐腰酸、姿态松垮的人群',
        '希望提升运动表现、预防运动损伤的运动爱好者'
      ],
      effect: [
        '构建抗伸展、抗侧屈、抗旋转三维度核心刚度',
        '深蹲、硬拉等复合动作稳定性显著提升',
        '改善体态根基，站立坐姿自然挺拔',
        '核心评分提升40%，腰背部损伤风险显著下降'
      ],
      weeks: [
        { t: '第1-2周 · 稳定基础', sub: '学会收紧', list: ['死虫式 3组×12次/侧', '鸟狗式 3组×10次/侧', '平板支撑 3组×45秒', '每周训练4次'] },
        { t: '第3-4周 · 力量进阶', sub: '加入动态', list: ['平板支撑 3组×60秒', '侧平板 3组×40秒/侧', '反向卷腹 3组×15次', '俄罗斯转体 3组×20次'] },
        { t: '第5-6周 · 刚度突破', sub: '不平衡负荷', list: ['单臂平板支撑 3组×30秒/侧', '侧平板髋下压 3组×12次/侧', '鸟狗式（负重或加停顿）3组×12次', '平板支撑力竭收尾×2组'] }
      ],
      moves: [
        {
          name: '平板支撑', img: demo('Fitness demonstration photo, athletic person holding perfect forearm plank on yoga mat, straight rigid line, core braced hard, studio lighting, side view'),
          steps: ['前臂撑地，肘在肩正下方，双脚与髋同宽', '腹部臀部同时收紧，骨盆微微后倾', '全身刚性保持，匀速呼吸坚持规定时间'],
          errs: ['塌腰撅臀', '肩胛下陷或耸肩', '时间优先于质量，动作变形硬撑']
        },
        {
          name: '侧平板支撑', img: demo('Fitness demonstration photo, person holding side plank on forearm on yoga mat, body in straight line, top arm on hip, obliques engaged, studio lighting, front side view'),
          steps: ['侧卧以前臂支撑，肘在肩正下方', '髋部抬离地面，头-髋-踝一条直线', '上方手叉腰或上举，保持规定时间换边'],
          errs: ['髋部下沉没抬到位', '身体前倒，支撑面失稳', '耸肩，肩部压力过大']
        },
        {
          name: '死虫式', img: demo('Fitness demonstration photo, woman performing dead bug exercise with slow controlled limb extension, lower back pressed into mat, studio lighting, top view'),
          steps: ['仰卧四肢举起，下背贴实地垫', '对侧手脚缓慢放低至接近地面', '呼气收回，全程下背不离地'],
          errs: ['下背拱起', '动作速度过快', '手腿放低超过控制范围']
        },
        {
          name: '鸟狗式', img: demo('Fitness demonstration photo, woman performing bird dog exercise on all fours, opposite arm and leg extended parallel to floor, hips level, studio lighting, side view'),
          steps: ['四点跪姿，脊柱中立', '对侧手脚同时伸展至与躯干一条线', '顶端停顿2秒，缓慢收回换边'],
          errs: ['骨盆旋转、腰部塌陷', '腿抬得过高导致腰反弓', '速度快失去稳定意义']
        },
        {
          name: '反向卷腹', img: demo('Fitness demonstration photo, woman performing reverse crunch with hips curling off mat, knees toward chest, lower abs contracting, studio lighting, side view'),
          steps: ['仰卧抬腿屈膝90度，双臂贴地', '下腹发力卷起骨盆，膝盖向胸口靠近', '缓慢下放还原，腰椎不离开地垫'],
          errs: ['靠腿部摆动惯性', '脖子发力前伸', '下放失控']
        },
        {
          name: '俄罗斯转体', img: demo('Fitness demonstration photo, person performing russian twist seated on yoga mat, torso rotated, hands clasped moving side to side, feet elevated optional, studio lighting, front view'),
          steps: ['坐姿后倾45度，核心收紧，双脚可离地', '双手合握随躯干向左右交替转动', '转动来自胸椎与核心，而非手臂甩动'],
          errs: ['弓背塌胸', '只摆手臂躯干不转', '速度快、幅度小']
        }
      ],
      notes: [
        '核心训练质量远大于时长，动作变形立即休息',
        '全程保持呼吸，憋气会让腹压骤升',
        '训练频率每周4次左右，核心肌群恢复较快但也需要休息',
        '可与其他训练同日进行，建议放在主训练之后'
      ],
      taboo: [
        '腰椎间盘突出急性期人群',
        '产后腹直肌分离未恢复者禁止卷腹转体类动作',
        '疝气患者禁止腹压剧烈变化的动作',
        '训练中出现腰部刺痛立即停止'
      ]
    },

    /* ─────────── 06 全身拉伸放松 ─────────── */
    p06: {
      num: '06',
      name: '全身拉伸放松',
      tags: ['拉伸', '瑜伽垫', '入门', '15分钟'],
      level: '入门', dur: '15分钟', cycle: '每日可练', moveCount: '6个动作',
      cover: 'images/program-stretch.jpg',
      coverAlt: '瑜伽拉伸全身伸展展示',
      intro: '覆盖颈、肩、背、腰、髋、腿全身主要肌群的静态拉伸方案，缓解肌肉紧张，提升柔韧性与关节活动度。适合作为训练后的放松整理，也适合久坐一天的晚间放松。每个动作保持30秒以上，让肌梭与高尔基腱器充分适应，实现真正的柔韧性提升而非"压疼为止"。',
      who: [
        '久坐一天颈肩腰背僵硬的上班族',
        '力量训练后需要放松整理的健身人群',
        '柔韧性差、弯腰摸不到脚尖的人群',
        '睡眠质量差、需要睡前放松的人群'
      ],
      effect: [
        '缓解颈肩腰背的慢性紧张与酸痛',
        '逐步提升全身柔韧性与关节活动度',
        '训练后拉伸促进恢复，减少延迟性酸痛',
        '睡前拉伸降低交感神经兴奋，改善入睡'
      ],
      weeks: [
        { t: '第1周 · 建立习惯', sub: '每天15分钟', list: ['完整流程每天1次（6个动作）', '每个动作保持30秒×2组', '动作间不休息直接切换', '记录每日僵硬感评分'] },
        { t: '第2周 · 加深幅度', sub: '柔韧渐进', list: ['保持时间延长至40秒', '鸽子式与体前屈尝试加深', '配合深呼吸放松紧张点'] },
        { t: '第3周 · 全身打开', sub: '重点突破', list: ['对最紧的部位额外加1组', '加入动态版本的猫牛式热身', '尝试弯腰摸地测试进退步'] },
        { t: '第4周 · 稳定维持', sub: '融入生活', list: ['保持每日练习', '训练日练后必做', '柔韧性对比拍照记录'] }
      ],
      moves: [
        {
          name: '颈部侧向拉伸', img: demo('Fitness demonstration photo, person gently stretching side of neck, hand over head pulling ear toward shoulder, relaxed seated posture, studio lighting, side view'),
          steps: ['坐直，右手越过头顶轻扶左侧头部', '头部缓慢向右侧倾倒，左肩下沉', '保持30秒感受颈侧牵拉，换边'],
          errs: ['用力拉扯头部', '耸肩导致拉伸感消失', '幅度过大引起疼痛']
        },
        {
          name: '猫牛式', img: demo('Fitness demonstration photo, woman performing cat cow stretch flow on all fours, spine flexing and extending gracefully, studio lighting, side view'),
          steps: ['四点跪姿起始', '吸气塌腰抬头延展脊柱，呼气拱背低头', '配合呼吸缓慢流动10次'],
          errs: ['速度过快无呼吸配合', '手肘锁死超伸', '腰部拱起时用颈部代偿']
        },
        {
          name: '婴儿式', img: demo('Fitness demonstration photo, woman in child pose on yoga mat, sitting back on heels with arms extended forward, forehead down, relaxed, studio lighting, side view'),
          steps: ['跪坐，臀部坐向脚跟', '上身前趴，双臂前伸或放体侧', '额头轻点地垫，深呼吸1分钟'],
          errs: ['臀部翘起坐不到脚跟（可在膝后垫毛巾）', '肩颈紧张耸肩', '呼吸浅促']
        },
        {
          name: '坐姿体前屈', img: demo('Fitness demonstration photo, woman seated on yoga mat in seated forward fold, legs extended, reaching toward toes with straight back first, studio lighting, side view'),
          steps: ['坐姿双腿前伸，脚尖回勾', '以髋为轴向前折叠，先保持背部延展', '自然下垂放松，保持30-40秒'],
          errs: ['弓背猛拽脚尖', '膝盖反压锁死', '憋气硬压']
        },
        {
          name: '鸽子式', img: demo('Fitness demonstration photo, woman performing pigeon pose on yoga mat, front leg folded forward, back leg extended straight, hips square, studio lighting, side view'),
          steps: ['前腿小腿横放于体前，后腿向后伸展', '髋部摆正下沉，上身前趴', '感受臀部深层牵拉，保持40秒换边'],
          errs: ['髋部歪斜未摆正', '前膝压力过大', '上身硬压，应靠重力自然下沉']
        },
        {
          name: '站立股四头肌拉伸', img: demo('Fitness demonstration photo, person standing quad stretch, one hand pulling foot toward glutes, knees together, balance maintained, studio lighting, side view'),
          steps: ['站立，同侧手拉住脚背拉向臀部', '双膝并拢，臀部收紧，骨盆中立', '保持30秒感受大腿前侧牵拉，换边'],
          errs: ['腰部反弓代偿', '膝盖向外打开', '扶墙时间久了可以，但臀部要始终收紧']
        }
      ],
      notes: [
        '拉伸到"明显牵拉感、可以正常说话"的程度即可',
        '冷肌肉不要深度拉伸，训练后或热水澡后效果最佳',
        '静态拉伸保持30秒以上才有效果',
        '全程用鼻呼吸，呼气时让身体进一步放松下沉'
      ],
      taboo: [
        '骨质疏松人群避免大幅度脊柱屈曲',
        '肌肉拉伤急性期（48小时内）禁止拉伸',
        '腰椎间盘突出者避免深度前屈动作',
        '关节过度松弛（超伸）人群注意保护关节中立'
      ]
    },

    /* ─────────── 07 头前伸改善 ─────────── */
    p07: {
      num: '07',
      name: '头前伸改善',
      tags: ['体态改善', '无器械', '入门', '10分钟'],
      level: '入门', dur: '10分钟', cycle: '3周计划', moveCount: '6个动作',
      cover: 'images/program-neck.jpg',
      coverAlt: '颈部拉伸动作侧面展示',
      intro: '针对长期低头导致的探颈问题，放松颈部紧张肌群，强化颈深屈肌，改善耳垂与肩峰的对位关系。头部每前伸2.5厘米，颈椎负荷增加约4.5公斤——低头60度看手机时颈椎承压高达27公斤。本计划从"放松枕下肌群、强化深层颈屈肌、调整日常姿势"三步重建头部中立位。',
      who: [
        '长时间低头看手机、电脑的"低头族"',
        '侧面看耳垂明显超前于肩峰的人群',
        '颈后酸胀、枕后紧张、易头痛的人群',
        '伴随圆肩问题需要一并改善的人群'
      ],
      effect: [
        '放松缩短的枕下肌群与上斜方肌上部',
        '激活薄弱的颈深屈肌，重建头部支撑力',
        '耳垂回到肩峰正上方，颈部线条修长',
        '颈后酸胀感与紧张性头痛明显减轻'
      ],
      weeks: [
        { t: '第1周 · 放松唤醒', sub: '松解+感知', list: ['收下巴 3组×10次', '颈部侧向拉伸 2组×30秒/侧', '胸锁乳突肌拉伸 2组×20秒/侧', '每2小时姿势自检1次'] },
        { t: '第2周 · 深层强化', sub: '激活颈深屈肌', list: ['靠墙收下巴 3组×12次', '收下巴（进阶：抬头点）3组×10次', '肩胛提肌拉伸 2组×30秒/侧', '靠墙天使 2组×10次'] },
        { t: '第3周 · 模式固化', sub: '融入日常', list: ['完整流程每日1次', '屏幕抬高至平视高度', '每小时收下巴练习5次', '侧面拍照对比对位关系'] }
      ],
      moves: [
        {
          name: '收下巴（下颌回缩）', img: demo('Fitness demonstration photo, person performing chin tuck neck exercise, sliding head horizontally back to align over shoulders, double chin gesture, clean background, side view'),
          steps: ['目视前方，下颌水平向后平移（做出双下巴）', '保持5秒感受颈后深层发力', '缓慢放松还原，重复10次'],
          errs: ['低头代替后收', '仰头变成做作表情', '肩膀跟着耸起']
        },
        {
          name: '靠墙收下巴', img: demo('Fitness demonstration photo, person standing with back against wall performing chin tuck, back of head touching wall, posture aligned, home background, side view'),
          steps: ['背部贴墙站立，脚跟离墙半步', '头部缓慢向后收，直到后脑贴墙', '保持5秒，感受颈前深层肌肉收缩'],
          errs: ['下颌上抬仰头找墙', '肩膀前探离开墙面', '腰部反弓离开墙']
        },
        {
          name: '颈部侧向拉伸', img: demo('Fitness demonstration photo, gentle lateral neck stretch, hand guiding head sideways toward shoulder, opposite shoulder dropped, studio lighting, front view'),
          steps: ['坐直，手越过头顶轻扶对侧', '头缓慢侧倾，对侧肩膀主动下沉', '保持30秒匀速呼吸，换边'],
          errs: ['猛拉头部', '对侧耸肩', '前倾或后仰偏离侧向平面']
        },
        {
          name: '胸锁乳突肌拉伸', img: demo('Fitness demonstration photo, person stretching front side of neck, head rotated and tilted back slightly, hand gently assisting, studio lighting, side view'),
          steps: ['头部向对侧旋转45度再微微后仰', '感受颈前侧从耳后到锁骨的牵拉', '保持20秒，动作必须轻柔，换边'],
          errs: ['幅度过大刺激颈动脉窦', '速度过快', '憋气紧张']
        },
        {
          name: '肩胛提肌拉伸', img: demo('Fitness demonstration photo, person stretching back side of neck toward armpit, head rotated 45 degrees then looking down, hand assisting gently, studio lighting, side view'),
          steps: ['头转向对侧45度再向下低（看向对侧口袋）', '同侧手轻扶后脑加深，对侧手臂向下延伸', '保持30秒感受颈后侧至肩胛内上角的牵拉'],
          errs: ['旋转不足，变成普通低头', '拉力过大', '肩膀未下沉']
        },
        {
          name: '靠墙天使', img: demo('Fitness demonstration photo, person performing wall angel with back and arms flat against wall, sliding arms up and down slowly, home background, front view'),
          steps: ['背部贴墙，屈肘90度手臂贴墙', '手臂沿墙缓慢上滑至最高点再滑回', '全程头部后脑贴墙不前探'],
          errs: ['头部前伸离开墙面', '手臂离墙', '腰部拱起']
        }
      ],
      notes: [
        '颈部结构娇贵，所有动作必须缓慢轻柔、宁小勿大',
        '改善的关键不在训练时长，而在日常屏幕高度与姿势',
        '手机举到眼睛高度，电脑屏幕垫高至平视',
        '配合收下巴训练，2-3周可见明显对位改善'
      ],
      taboo: [
        '椎动脉型颈椎病、严重颈椎病患者遵医嘱',
        '训练中出现头晕、手麻、恶心立即停止',
        '颈部外伤或术后未满3个月者禁止自行训练',
        '有椎间盘急性症状者禁止后仰类拉伸'
      ]
    },

    /* ─────────── 08 下肢体态矫正 ─────────── */
    p08: {
      num: '08',
      name: '下肢体态矫正',
      tags: ['体态改善', '无器械', '进阶', '20分钟'],
      level: '进阶', dur: '20分钟', cycle: '6周计划', moveCount: '6个动作',
      cover: 'images/why-accordion.jpg',
      coverAlt: '下肢训练动作展示',
      intro: '针对膝关节内扣或外展的下肢力线异常问题，强化臀中肌与大腿内侧肌群，调整髌骨轨迹，改善下肢排列。X/O型腿的核心多在髋——臀中肌无力导致股骨内旋内收（X型），内收肌紧张叠加外侧结构薄弱则加重O型表现。本计划从髋部发力模式入手重建膝踝力线。',
      who: [
        '自然站立膝盖内扣、大腿相互摩擦的X型腿倾向人群',
        'O型腿、膝盖外翻、小腿外旋的人群',
        '深蹲时膝盖内扣、足弓塌陷的人群',
        '下肢力线异常导致膝盖易酸易伤的人群'
      ],
      effect: [
        '激活失忆的臀中肌，稳定骨盆与股骨排列',
        '平衡大腿内外侧肌力，调整髌骨滑动轨迹',
        '重建足弓感知与膝踝对位，改善下肢力线',
        '6周后自然站姿膝距缩小，步态更稳更直'
      ],
      weeks: [
        { t: '第1-2周 · 激活期', sub: '唤醒臀中肌', list: ['蚌式开合 3组×15次/侧', '侧卧抬腿 3组×12次/侧', '箱式深蹲 3组×12次', '每周训练4次'] },
        { t: '第3-4周 · 强化期', sub: '力量渐进', list: ['蚌式开合（加弹力带）3组×15次', '单腿臀桥 3组×10次/侧', '弓步蹲 3组×10次/侧', '靠墙静蹲 3组×40秒'] },
        { t: '第5-6周 · 力线重建', sub: '单侧稳定', list: ['箱式深蹲（单腿辅助）3组×8次/侧', '弓步蹲 3组×12次/侧', '靠墙静蹲 3组×60秒', '自然站姿膝距测量记录'] }
      ],
      moves: [
        {
          name: '蚌式开合', img: demo('Fitness demonstration photo, woman performing clamshell exercise lying on side on yoga mat, knees bent together opening top knee like clam shell, glute engaged, studio lighting, side view'),
          steps: ['侧卧屈膝叠腿，脚跟并拢，骨盆保持正对前方', '膝盖如贝壳缓慢打开至最高点，骨盆不后旋', '缓慢合拢，全程感受臀部外侧发力'],
          errs: ['骨盆后倒借力，幅度造假', '速度过快甩动', '双脚离地分开']
        },
        {
          name: '侧卧抬腿', img: demo('Fitness demonstration photo, woman lying on side performing straight leg raise, top leg lifted to 45 degrees, body aligned, glute medius engaged, studio lighting, side view'),
          steps: ['侧卧身体一条线，下侧手撑头', '上方腿伸直缓慢抬起约45度，脚尖朝前不外翻', '缓慢下放但不接触另一条腿'],
          errs: ['腿外旋脚尖朝天，臀部前侧代偿', '抬起过高引起腰部紧张', '身体前后晃动']
        },
        {
          name: '箱式深蹲', img: demo('Fitness demonstration photo, person performing box squat onto chair, sitting back with hips, shins vertical, knees tracking over toes, home background, front view'),
          steps: ['背对椅子站立，双脚与肩同宽', '屈髋向后坐，膝盖对准脚尖方向', '轻触椅面即发力站起，不坐实'],
          errs: ['膝盖内扣（本计划重点纠正项）', '重心移到脚尖，脚跟离地', '塌腰弓背']
        },
        {
          name: '单腿臀桥', img: demo('Fitness demonstration photo, woman performing single leg glute bridge on yoga mat, one foot planted one leg extended, hips level and lifted, studio lighting, side view'),
          steps: ['仰卧单脚踩地，另一腿伸直抬起', '臀部发力顶起，骨盆保持水平不倾斜', '顶端停顿2秒缓慢下放'],
          errs: ['骨盆旋转倾斜', '腰部反弓代偿', '支撑腿膝盖外展内扣不稳']
        },
        {
          name: '弓步蹲', img: demo('Fitness demonstration photo, person performing forward lunge, front shin vertical, knee tracking over second toe, back knee near floor, torso upright, home background, side view'),
          steps: ['向前跨步，双腿屈膝下蹲', '前膝对准第二脚趾方向，小腿接近垂直', '前腿发力蹬地站起，换边'],
          errs: ['前膝内扣（重点避免）', '身体前倾、后跟离地', '步距过小膝盖冲击大']
        },
        {
          name: '靠墙静蹲', img: demo('Fitness demonstration photo, person holding wall sit position, back flat against wall, thighs parallel to floor, knees at 90 degrees above ankles, home background, side view'),
          steps: ['背部完全贴墙下滑至大腿平行地面', '膝盖在脚踝正上方，小腿垂直地面', '膝盖对准脚尖，坚持规定时间'],
          errs: ['膝盖超过脚尖', '膝盖内扣', '腰部离开墙面借力']
        }
      ],
      notes: [
        '所有下肢动作都要求膝盖对准脚尖方向，这是力线重建的核心',
        '若已有明显膝痛，先就医排查再训练',
        '激活类动作（蚌式、抬腿）追求精准发力而非次数',
        '配合日常避免W坐姿与跷二郎腿'
      ],
      taboo: [
        '膝关节韧带、半月板损伤急性期人群',
        '髋膝关节置换术后早期患者',
        '下肢骨折未愈合者',
        '训练中膝内刺痛立即停止并就医评估'
      ]
    },

    /* ─────────── 09 高低肩矫正 ─────────── */
    p09: {
      num: '09',
      name: '高低肩矫正',
      tags: ['体态改善', '弹力带', '进阶', '15分钟'],
      level: '进阶', dur: '15分钟', cycle: '4周计划', moveCount: '6个动作',
      cover: 'images/why-center.jpg',
      coverAlt: '肩部训练动作展示',
      intro: '针对两侧肩峰高度不一致问题，放松高侧紧张肌群，强化低侧薄弱肌群，改善肩胛对称性与脊柱排列。高低肩多源于长期单侧负重（背包、提物）与单侧坐姿，导致两侧斜方肌与肩袖力量失衡，需"松高侧、练低侧、稳核心"三线并行。',
      who: [
        '一侧背包、长期单侧用电脑导致的肩线不齐人群',
        '照镜子发现两侧肩峰明显不等高的人群',
        '一侧颈肩常年紧绷酸胀的人群',
        '伴随脊柱轻度侧弯倾向需改善肌力平衡的人群'
      ],
      effect: [
        '放松高侧紧张的上斜方肌与肩胛提肌',
        '强化低侧与双侧薄弱的中下斜方肌、菱形肌',
        '改善肩胛骨对称性，恢复肩线水平',
        '减轻单侧颈肩慢性紧张与疲劳'
      ],
      weeks: [
        { t: '第1周 · 评估放松', sub: '松高侧', list: ['单侧上斜方肌拉伸 3组×30秒（高侧）', '单侧肩胛下沉 3组×10次（高侧）', '鸟狗式 2组×10次/侧', '拍照记录肩线基线'] },
        { t: '第2周 · 双侧激活', sub: '唤醒背部', list: ['弹力带高位下拉 3组×12次', 'YTW推举 2组×每式8次', '鸟狗式 3组×10次/侧', '高侧拉伸继续'] },
        { t: '第3周 · 不对称训练', sub: '补低侧短板', list: ['弹力带单侧下拉 3组×12次（低侧多1组）', '侧平板 3组×30秒/侧', '单侧耸肩下降 3组×12次', '高侧拉伸继续'] },
        { t: '第4周 · 平衡巩固', sub: '对称习惯', list: ['完整流程每日1次', '背包换边或改双肩包', '工位显示器居中', '拍照对比肩线变化'] }
      ],
      moves: [
        {
          name: '弹力带高位下拉', img: demo('Fitness demonstration photo, person performing lat pulldown with resistance band anchored overhead, pulling elbows down to sides, shoulder blades squeezing, gym background, front view'),
          steps: ['弹力带固定于头顶上方，跪坐或站立握两端', '肘部向下向内拉，肩胛骨主动下沉后缩', '缓慢还原，感受背部发力而非手臂'],
          errs: ['耸肩借力', '身体后仰甩动', '只用手臂拉，背部无感']
        },
        {
          name: '单侧肩胛下沉', img: demo('Fitness demonstration photo, person performing single shoulder blade depression exercise, one arm reaching down pulling shoulder blade toward hip pocket, neck relaxed, studio lighting, side view'),
          steps: ['坐姿，一手撑凳发力将肩胛向下沉', '感受肩胛骨远离耳朵、贴向胸壁', '保持5秒缓慢放松，重复10次'],
          errs: ['耸肩对抗', '用手臂下压代替肩胛发力', '躯干侧倾代偿']
        },
        {
          name: '单侧上斜方肌拉伸', img: demo('Fitness demonstration photo, person stretching upper trapezius, head tilted sideways away from tight shoulder, opposite hand behind back, studio lighting, side view'),
          steps: ['对侧手扶头，高侧手背后压肩', '头缓慢向对侧倾倒', '保持30秒感受颈肩交界处牵拉'],
          errs: ['拉力过猛', '肩膀未下沉', '头前伸代偿']
        },
        {
          name: '鸟狗式', img: demo('Fitness demonstration photo, woman performing bird dog on all fours, opposite arm and leg extended, hips and shoulders level and square, studio lighting, side view'),
          steps: ['四点跪姿，对侧手脚同时伸展', '肩髋保持水平，不向一侧塌陷', '顶端停顿2秒，缓慢收回换边'],
          errs: ['骨盆与肩膀倾斜', '抬腿过高腰部塌陷', '速度快失去控制意义']
        },
        {
          name: '侧平板支撑', img: demo('Fitness demonstration photo, person holding side plank on forearm, body straight, hips lifted high, weaker side doing extra hold, studio lighting, front view'),
          steps: ['侧卧前臂撑地，肘在肩正下方', '髋部抬起至头-髋-踝一条直线', '低侧多坚持15秒，均匀换边'],
          errs: ['髋部下沉', '身体前倾', '低侧支撑时耸肩']
        },
        {
          name: '弹力带侧平举', img: demo('Fitness demonstration photo, person performing lateral raise standing on resistance band, arms raising to shoulder height with thumbs slightly up, controlled movement, studio lighting, front view'),
          steps: ['双脚踩住弹力带，双手握两端垂于体侧', '双臂向侧上方举至与肩同高，拇指微上', '缓慢下放，弱侧可多做1组'],
          errs: ['耸肩，斜方肌代偿', '举过肩过高撞击肩峰', '借力甩动']
        }
      ],
      notes: [
        '先拍照确认哪侧更高，"松高侧、练低侧"方向不能反',
        '生活习惯比训练更重要：换肩背包、显示器居中',
        '若高低肩持续加重或伴腰线不对称，建议排查脊柱侧弯',
        '不对称训练的原则：弱侧多练一组，强侧不多练'
      ],
      taboo: [
        '脊柱侧弯（Cobb角>10度）患者请先就医评估',
        '肩袖损伤急性期禁止侧平举与下拉',
        '颈椎病急性发作期暂停头颈相关拉伸',
        '训练中出现单侧手臂麻木立即停止'
      ]
    },

    /* ─────────── 02 心肺燃脂（首页专属） ─────────── */
    p10: {
      num: '02',
      name: '心肺燃脂',
      tags: ['燃脂', '拳击', '进阶', '25分钟'],
      level: '进阶', dur: '25分钟', cycle: '4周计划', moveCount: '12个动作',
      cover: 'images/program-cardio.jpg',
      coverAlt: '拳击靶击打与间歇训练展示',
      intro: '将高强度间歇训练（HIIT）与拳击靶击打相结合，通过快速出拳、移动、组合动作持续提升心率，在短时间内实现高效燃脂，同时提升心肺功能、爆发力与协调性。无需专业拳馆，居家即可完成基础版本——没有拳靶时对着空气出拳（影子拳）同样有效。',
      who: [
        '希望高效减脂、缩短训练时间的人群',
        '想要提升心肺耐力与爆发力的健身者',
        '对拳击运动感兴趣、想尝试新训练形式的人',
        '有一定运动基础、能承受高强度间歇训练的人'
      ],
      effect: [
        '25分钟训练可消耗300-400千卡，高效制造热量缺口',
        '提升最大摄氧量（VO2max），心肺耐力显著增强',
        '出拳速度与爆发力提升，拳峰更果断有力',
        '改善协调性、反应速度与核心稳定性',
        '训练后持续燃脂，后燃效应可达12-24小时'
      ],
      weeks: [
        { t: '第1周 · 基础动作学习', sub: '低强度间歇 20s/40s', list: ['拳击三基础：直拳、摆拳、勾拳技术', '前后滑步、左右侧滑步伐练习', '间歇节奏：20秒运动 + 40秒休息 × 10组', '每周训练3-4次'] },
        { t: '第2周 · 组合动作练习', sub: '中等强度间歇 30s/30s', list: ['1-2拳组合：直拳+直拳、直拳+摆拳', '组合中加入环绕步移动出拳', '间歇节奏：30秒运动 + 30秒休息 × 10组', '每周训练4次'] },
        { t: '第3周 · 完整组合', sub: '高强度间歇 40s/20s', list: ['3-4拳组合 + 移动 + 防守格挡', '组合间穿插开合跳、登山跑', '间歇节奏：40秒运动 + 20秒休息 × 10组', '每周训练4-5次'] },
        { t: '第4周 · 模拟对练节奏', sub: '极限间歇 50s/10s', list: ['模拟对练：组合拳+步伐+间歇动作连续执行', '极限间歇：50秒运动 + 10秒休息 × 12组', '结课测试：3分钟回合 × 3组挑战', '录屏对比出拳速度与体能变化'] }
      ],
      moves: [
        {
          name: '直拳（Jab & Cross）', img: demo('Boxing training demonstration photo, athlete throwing straight jab cross punches at focus pads, athletic stance, fists guarding chin, dark gym background, professional lighting, front view'),
          steps: ['实战姿势站立，双手护于下颌，核心收紧', '前手快速沿直线击出（Jab），出拳后立即收回护脸', '后手蹬地转髋跟进沿直线击出（Cross），力量从地面开始传导'],
          errs: ['出拳时耸肩或肘关节完全锁死', '仅用手臂发力，没有蹬地转髋', '出拳后收手过慢，下颌暴露空档']
        },
        {
          name: '摆拳（Hook）', img: demo('Boxing training demonstration photo, athlete throwing horizontal hook punch with bent elbow at 90 degrees, hips rotating, dark gym background, professional lighting, side view'),
          steps: ['实战姿势，肘部抬起与肩同高、屈肘约90度', '转髋带动肩部，拳头沿水平弧线击向目标侧面', '击中后快速沿弧线收回，回到防御姿势'],
          errs: ['抡大臂甩拳，动作轨迹过大暴露空档', '手腕未扣紧，击打瞬间容易受伤', '双脚离地跳动，重心不稳']
        },
        {
          name: '勾拳（Uppercut）', img: demo('Boxing training demonstration photo, athlete throwing uppercut punch rising from low position with palm facing self, knees bent, dark gym background, professional lighting, side view'),
          steps: ['屈膝降重心，拳头下沉、掌心朝向自己', '蹬地转髋，拳头由下向上沿短弧线击出', '击打后迅速收拳护脸，恢复实战姿势'],
          errs: ['发力前大幅预摆，动作像抡锤', '上身过度前倾失去平衡', '收拳缓慢，中路门户大开']
        },
        {
          name: '前后滑步', img: demo('Boxing training demonstration photo, athlete in boxing stance performing forward and backward footwork slide, weight on balls of feet, guard up, dark gym background, side view'),
          steps: ['实战姿势，重心置于双腿前脚掌', '向前时前脚先滑半步，后脚随即跟进保持间距', '后退时后脚先行、前脚跟随，双脚全程不交叉'],
          errs: ['跳跃式移动，重心起伏过大', '步幅过大导致双脚交叉失去平衡', '脚跟拖地，移动迟缓']
        },
        {
          name: '左右侧滑', img: demo('Boxing training demonstration photo, athlete performing lateral side step boxing footwork, sliding sideways with guard up, knees slightly bent, dark gym background, front view'),
          steps: ['实战姿势，向一侧横向滑动半步', '另一侧脚快速跟进，身体始终面向目标', '滑动中保持双手护脸与出拳角度'],
          errs: ['身体转动过大，侧面暴露', '出现交叉步', '滑步后忘记归位，间距失控']
        },
        {
          name: '环绕步', img: demo('Boxing training demonstration photo, athlete performing pivoting circle footwork in boxing stance, front foot acting as pivot, moving along arc, guard up, dark gym background, front side view'),
          steps: ['以前脚为轴，后脚沿弧线绕行', '全程面向目标方向，保持实战距离', '绕行中随时可衔接组合拳'],
          errs: ['绕行时低头看脚', '步伐忽大忽小，距离失控', '背部转向目标']
        },
        {
          name: '开合跳', img: demo('Fitness demonstration photo, athletic person performing jumping jacks, arms overhead, legs apart mid-jump, dynamic motion, home living room background, bright lighting, front view'),
          steps: ['站立起跳同时双脚分开、双手头顶击掌', '再跳回并拢，节奏均匀', '前脚掌落地，膝盖微屈缓冲'],
          errs: ['脚跟重重落地，膝盖冲击大', '手臂未完全举过头顶', '弯腰驼背']
        },
        {
          name: '高抬腿', img: demo('Fitness demonstration photo, person performing high knees running in place, knee lifted to hip height, core upright, home background, bright lighting, front view'),
          steps: ['原地快速交替抬腿，膝盖抬至髋部高度', '手臂配合摆动，重心略前倾', '前脚掌着地，保持弹性节奏'],
          errs: ['膝盖未抬到髋部高度，强度不足', '上身后仰', '全脚掌沉重落地']
        },
        {
          name: '波比跳', img: demo('Fitness demonstration photo, athletic person mid burpee jump with arms overhead, dynamic full body movement, home background, bright lighting, side view'),
          steps: ['下蹲双手撑地，双脚向后跳成平板', '完成一次俯卧撑（可选），双脚跳回蹲姿', '垂直向上跳起击掌，落地缓冲重复'],
          errs: ['塌腰撅臀，平板阶段核心松弛', '跳回时脚落位太远，下背代偿', '全程无节奏、忽快忽慢']
        },
        {
          name: '登山跑', img: demo('Fitness demonstration photo, person in plank position performing mountain climbers, alternating knees driving toward chest, fast pace, home background, side view'),
          steps: ['平板支撑起始，肩在腕正上方', '双腿快速交替将膝盖拉向胸口', '臀部保持水平，不上下晃动'],
          errs: ['臀部抬得过高，变成俯撑姿势', '肩部位置偏移超过手腕', '节奏忽快忽慢']
        },
        {
          name: '平板支撑', img: demo('Fitness demonstration photo, athletic person holding perfect forearm plank on yoga mat, straight rigid line, core braced hard, studio lighting, side view'),
          steps: ['前臂撑地，肘在肩正下方，双脚与髋同宽', '腹部臀部同时收紧，骨盆微微后倾', '全身刚性保持，匀速呼吸坚持规定时间'],
          errs: ['塌腰撅臀', '肩胛下陷或耸肩', '时间优先于质量，动作变形硬撑']
        },
        {
          name: '俄罗斯转体', img: demo('Fitness demonstration photo, person performing russian twist seated on yoga mat, torso rotated, hands clasped moving side to side, feet elevated optional, studio lighting, front view'),
          steps: ['坐姿后倾45度，核心收紧，双脚可离地', '双手合握随躯干向左右交替转动', '转动来自胸椎与核心，而非手臂甩动'],
          errs: ['弓背塌胸', '只摆手臂躯干不转', '速度快、幅度小']
        }
      ],
      notes: [
        '训练前充分热身5-10分钟，重点活动肩、腕、膝关节',
        '出拳时保持核心收紧，避免耸肩，保护肩关节',
        '无拳靶时可对着空气出拳（影子拳），或用抱枕替代',
        '如出现头晕、心慌、关节疼痛，立即停止训练',
        '每次训练后进行5-10分钟拉伸放松，重点放松肩背'
      ],
      taboo: [
        '高血压、心脏病及心脑血管疾病高危人群',
        '肩、腕、膝关节损伤未完全恢复者',
        '孕期女性',
        '感冒发热、头晕胸闷等身体不适时禁止训练'
      ]
    },

    /* ─────────── 11 功能性训练（首页编号03） ─────────── */
    p11: {
      num: '03',
      name: '功能性训练',
      tags: ['力量', '复合动作', '高阶', '30分钟'],
      level: '高阶', dur: '30分钟', cycle: '4周计划', moveCount: '12个动作',
      cover: 'images/program-functional.jpg',
      coverAlt: '杠铃深蹲硬拉推举等复合力量训练展示',
      intro: '以深蹲、硬拉、推举等多关节复合动作为核心，模拟日常生活动作模式，全面强化下肢推力、下肢拉力、上肢推力、上肢拉力及核心稳定性。提升全身力量、协调性与运动表现，降低日常活动与运动中的损伤风险。',
      who: [
        '有一定训练基础、希望突破力量瓶颈的健身者',
        '想要提升运动表现（跑步、球类、格斗等）的运动爱好者',
        '希望改善身体功能、预防日常损伤的人群',
        '能够正确掌握基础复合动作技术的训练者'
      ],
      effect: [
        '全面提升下肢、上肢及核心最大力量',
        '改善神经肌肉协调性与动作效率',
        '提升基础代谢，促进肌肉生长',
        '增强关节稳定性，预防运动损伤',
        '提升日常活动能力（搬运、攀爬、长时间站立等）'
      ],
      weeks: [
        { t: '第1周 · 动作技术巩固', sub: '空杆/轻重量 · 高次数', list: ['深蹲、硬拉、卧推、推举以空杆或轻重量练习动作模式', '每个主力动作 3组×12次，重量取1RM的40-50%', '录像自查：下蹲深度、背部刚性、杠铃轨迹', '每周训练3次，隔天安排'] },
        { t: '第2周 · 基础力量构建', sub: '中等重量 5×5', list: ['深蹲、硬拉、卧推 5组×5次（1RM的70-75%）', '辅助动作：箭步蹲、引体向上 3组×8-10次', '渐进超负荷：每次训练较上次加重约2.5%', '组间休息3分钟，每周训练3-4次'] },
        { t: '第3周 · 力量强化', sub: '较大重量 4×3-5', list: ['主力动作 4组×3-5次（1RM的80-85%）', '增加辅助动作：罗马尼亚硬拉、俯身划船 3组×6-8次', '农夫行走 3组×30米，强化核心与握力', '上下肢分化安排，每周训练4次'] },
        { t: '第4周 · 峰值测试', sub: '极限重量 · 1RM挑战', list: ['减量周：主力动作 3组×2次（1RM的85-90%）', '测试日：深蹲、硬拉、卧推、推举逐一挑战新1RM', '记录所有1RM数据，与第1周对比评估进步', '测试后完全休息2-3天，进入下一循环'] }
      ],
      moves: [
        {
          name: '杠铃深蹲', img: demo('Gym demonstration photo, athlete performing barbell back squat at bottom position, thighs parallel to floor, neutral spine, barbell on upper traps, power rack background, professional lighting, side view'),
          steps: ['杠铃置于斜方肌上部，双手握稳，双脚与肩同宽、脚尖略外展', '吸气收紧核心，屈髋屈膝同时下蹲至大腿平行或略低于地面', '脚跟发力站起，全程保持背部刚性与杠铃轨迹垂直'],
          errs: ['膝盖内扣，膝关节承受剪切力', '弓腰或过度前倾，腰椎压力剧增', '脚跟离地，重心前移至脚尖']
        },
        {
          name: '箭步蹲', img: demo('Gym demonstration photo, athlete performing dumbbell lunge, front knee bent 90 degrees, torso upright, rear knee near floor, gym background, professional lighting, side view'),
          steps: ['直立，一腿向前跨出一大步，后脚跟抬起', '垂直下蹲至前后膝均约90度，前膝不超过脚尖', '前脚发力蹬地站起，两侧交替重复'],
          errs: ['前膝内扣或超过脚尖过多', '上身前倾、重心左右晃动', '步距过小，后膝重重触地']
        },
        {
          name: '腿举', img: demo('Gym demonstration photo, athlete using 45 degree leg press machine, feet shoulder width on platform, knees bent deeply, lower back flat against pad, gym background, side view'),
          steps: ['仰卧于腿举机，双脚与肩同宽踩于踏板中部', '屈膝下放至大腿接近胸口，腰部始终贴靠背垫', '脚掌发力推起，膝盖接近伸直但不锁死'],
          errs: ['下放过深导致腰部离开背垫卷曲', '顶端膝盖完全锁死借力', '双脚位置过低，膝关节压力过大']
        },
        {
          name: '传统硬拉', img: demo('Gym demonstration photo, athlete performing conventional barbell deadlift at top lockout position, neutral spine, barbell close to legs, gym background, professional lighting, side view'),
          steps: ['双脚踩稳杠下，屈髋俯身握杠，背部平直挺胸', '蹬地拉起，杠铃贴身沿腿部上行，髋膝同步伸展', '顶端站直锁定肩胛，再沿原轨迹贴身下放还原'],
          errs: ['圆背起拉，腰椎承受极大剪切力', '杠铃离身体过远，力臂增大腰部代偿', '顶端过度后仰锁腰']
        },
        {
          name: '罗马尼亚硬拉', img: demo('Gym demonstration photo, athlete performing romanian deadlift, hips pushed back, barbell sliding down thighs with flat back, slight knee bend, hamstring stretch, gym background, side view'),
          steps: ['站立握杠于髋前，膝盖微屈并固定', '屈髋向后推臀，杠铃贴大腿下滑至小腿上段', '感受腘绳肌强烈牵拉后，伸髋夹臀拉起还原'],
          errs: ['变成屈膝下蹲，腘绳肌无牵拉感', '弓背或杠铃远离身体', '顶端过度挺腰']
        },
        {
          name: '臀桥', img: demo('Gym demonstration photo, athlete performing barbell hip thrust with upper back on bench, hips fully extended in straight line, padded barbell on hips, gym background, side view'),
          steps: ['上背靠凳，杠铃护垫置于髋部，双脚踩实地面', '呼气伸髋向上顶起，肩髋膝呈一条直线', '顶端夹臀停顿1秒，缓慢下放不负重触地重复'],
          errs: ['腰椎过度反弓代替伸髋发力', '双脚位置过远，腘绳肌代偿', '顶端不停顿，靠惯性起伏']
        },
        {
          name: '卧推', img: demo('Gym demonstration photo, athlete performing barbell bench press with bar touching chest, elbows at 45 degrees, shoulder blades retracted, feet planted, gym background, side view'),
          steps: ['仰卧凳上，双脚踩实地面，肩胛后缩下沉，握距略宽于肩', '杠铃下放至胸口连线附近，肘部约45-70度夹角', '胸部发力推起至手臂伸直，杠铃轨迹微向肩部回勾'],
          errs: ['臀部离开凳面起桥借力', '杠铃在胸口反弹卸力', '肘部过度外展至90度，肩关节受压']
        },
        {
          name: '站姿推举', img: demo('Gym demonstration photo, athlete performing standing barbell overhead press, bar locked out overhead in line with body, core and glutes braced, gym background, front side view'),
          steps: ['杠铃置于锁骨前，握距略宽于肩，核心与臀部收紧', '杠沿垂直或微向后弧线推过头顶，头部适时前穿回位', '顶端杠铃位于头顶正上方，肩胛上举锁定，缓慢还原'],
          errs: ['推起时腰部过度反弓', '杠铃绕头前弧线过大偏离重心', '膝盖弹抖借力变成借力推']
        },
        {
          name: '引体向上', img: demo('Gym demonstration photo, athlete performing pull-up with chin over bar, shoulder blades depressed, controlled full range motion, gym background, front view'),
          steps: ['正握单杠略宽于肩，肩胛先下沉启动（沉肩引体）', '肘部向下向后拉，胸口趋近单杠', '有控制地下放至手臂近伸直，全程保持肩胛张力'],
          errs: ['借力蹬腿甩身', '只做半程，下巴未过杠', '下放时完全放松挂杠，肩关节受拉']
        },
        {
          name: '俯身划船', img: demo('Gym demonstration photo, athlete performing bent over barbell row, torso hinged 45 degrees with flat back, bar pulled to lower abdomen, elbows close to body, gym background, side view'),
          steps: ['屈髋俯身约45度，背部平直，杠铃悬垂于体前', '肘部贴近身体将杠拉向下腹部，肩胛主动后缩', '顶端停顿挤压背肌，缓慢下放还原'],
          errs: ['弓背或起身借力', '只用手臂拉，肩胛不参与', '杠铃离身体过远，下背代偿']
        },
        {
          name: '农夫行走', img: demo('Gym demonstration photo, athlete performing farmers walk carrying heavy dumbbells in both hands, upright posture, core braced, mid walk, gym background, front side view'),
          steps: ['双手各握一只大重量哑铃或壶铃，站直挺胸收核心', '肩胛稳定下沉，小步快速向前行走', '全程躯干刚性不左右倾斜，到达规定距离后缓慢放下'],
          errs: ['弯腰驼背拎重物', '身体向一侧倾斜', '重物晃荡远离身体中线']
        },
        {
          name: '平板支撑', img: demo('Fitness demonstration photo, athletic person holding perfect forearm plank on yoga mat, straight rigid line, core braced hard, studio lighting, side view'),
          steps: ['前臂撑地，肘在肩正下方，双脚与髋同宽', '腹部臀部同时收紧，骨盆微微后倾', '全身刚性保持，匀速呼吸坚持规定时间'],
          errs: ['塌腰撅臀', '肩胛下陷或耸肩', '时间优先于质量，动作变形硬撑']
        }
      ],
      notes: [
        '训练前必须充分热身，动态拉伸+空杆动作练习',
        '严格遵守动作技术规范，大重量训练需找人保护',
        '遵循渐进超负荷原则，每周增重不超过2.5%',
        '如出现关节尖锐疼痛，立即停止，不要带伤训练',
        '高阶训练建议在专业教练指导下进行',
        '训练后保证充足营养与睡眠恢复'
      ],
      taboo: [
        '严重心血管疾病、血压未控制的高血压人群',
        '腰背损伤未愈合（如椎间盘问题）者',
        '肩、肘、膝、踝关节急性损伤期人群',
        '未掌握基础动作技术、无保护条件的训练新手'
      ]
    }

  };

  /* 首页等处的快捷访问 */
  window.getProject = id => window.PROJECTS[id];
})();
