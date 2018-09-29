## Flash Notes / 闪念笔记

------

This extension aims to provide a smart text editor which can accepts both keyboard input and voice input. By transcribing users' speech to text, it can help users to catch their inspiration in a flash and to improve their productivity.

这款文字编辑器插件能够接受文字输入和语音输入。其中，语音输入功能能够将语音转换成文字，帮助用户捕捉他们转瞬即逝的灵感，从而提高工作效率。

### Quick Overview / 产品功能

------

#### Speech to text / 语音转文字

- Click the microphone on the right side can start transcribing user's speech to text. When one part of the transcription finishes, the trancript will be added into the text editor automatically. / 点击页面中的麦克风可以开始进行语音识别，转换的文字会在下方显示，一段语音识别完成后会自动添加到文字编辑器中
- Various languages can be recognized by choosing from the select bar / 可以选择不同语言进行语音识别

#### Text editor / 文字编辑器

- In the text editor, user can type and change the style of the text / 文字编辑器可以进行文字输入及简单的样式调整
- The transcript added into the text editor will be wrapped in a `<p>` tag / 语音输入的内容会以`<p>`的形式加入到文字编辑器中

#### Saving files

- The content in the text editor can be saved / 文字编辑器中的内容可以保存到本地（文件格式为html）

#### Page language switching

- The extension has both English version and Chinese version / 提供中英文两种语言界面

### Based on  / 使用开源库

------

- 语音识别API：[React Speech Recognition](https://github.com/FoundersFactory/react-speech-recognition)
- Quill文字编辑器： [React Quill](https://github.com/zenoamaro/react-quill)
- 文件保存：[FileSaver.js](https://github.com/eligrey/FileSaver.js/)



### 