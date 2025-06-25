import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import Control from "./components/Control/Control";
import "./App.css";
import { setupControl } from "./utils";
import 'react-simple-keyboard/build/css/index.css';
import { useEffect, useRef, useState } from "react";
import "handlebars/dist/handlebars.min.js";
import KeyboardReact from "react-simple-keyboard";

const contentInit = `\\title "Canon Rock"
\\subtitle "JerryC"
\\tempo 90
.
:2 19.2{v f} 17.2{v f} |
15.2{v f} 14.2{v f}|
12.2{v f} 10.2{v f}|
12.2{v f} 14.2{v f}.4 :8 15.2 17.2 |
14.1.2 :8 17.2 15.1 14.1{h} 17.2 |
15.2{v d}.4 :16 17.2{h} 15.2 :8 14.2 14.1 17.1{b(0 4 4 0)}.4 |
15.1.8 :16 14.1{tu 3} 15.1{tu 3} 14.1{tu 3} :8 17.2 15.1 14.1 :16 12.1{tu 3} 14.1{tu 3} 12.1{tu 3} :8 15.2
14.2 |
12.2 14.3 12.3 15.2 :32 14.2{h} 15.2{h} 14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h}
15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}\n`

const App = () => {
  const editor = useCreateBlockNote({
    initialContent: contentInit.split("\n").map(line => ({
      type: "paragraph",
      content: line
    }))
  });

  const apiRef = useRef<any>(null);
  const keyboardRef = useRef<any>(null);
  const [layoutName, setLayoutName] = useState<"default" | "shift">("default");

  const initAtAndEditor = async() => {
    const element = document.getElementById('alphaTab');

    if(!element) return
    delete element.dataset.file;
    delete element.dataset.tracks;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    element.dataset.tex = true;
    const html = await editor.blocksToHTMLLossy(editor.document);
    element.innerHTML = html;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    apiRef.current = setupControl('#alphaTab', { file: undefined, tex: 'true'});
    apiRef.current.tex(contentInit)
  }

  const deleteBackward = () => {
    editor.transact((tr) => {
      const { $from, empty } = tr.selection;
      // If there's a selection, delete it
      if (!empty) {
        tr.deleteSelection();
        return;
      }
      // If just cursor, delete the character before cursor
      const from = $from.pos - 1;
      const to = $from.pos;
      if (from >= 0) {
        tr.delete(from, to);
      }
    });
  };
  

  const onKeyPress = (button: string) => {
    if (button === "{bksp}") {
      deleteBackward();
    } else if (button === "{shift}" || button === "{lock}") {
      const newLayout = layoutName === "default" ? "shift" : "default";
      setLayoutName(newLayout);
      keyboardRef.current?.setOptions({ layoutName: newLayout });
    } else if (button === "{enter}") {
      editor.insertInlineContent("\n");
    } else if (button === "{space}") {
      editor.insertInlineContent(" ");
    } else {
      editor.insertInlineContent(button);
    }
  };

  useEffect(() => {
    // Initialize API after component renders
    initAtAndEditor()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <Control />
      <div className="editor-wrap">
        <BlockNoteView
          className="editor"
          editor={editor}
          onChange={async () => {
            const text = editor.document
              .map(block =>
                Array.isArray(block.content) && block.content.length > 0 && 'text' in block.content[0]
                  ? (block.content[0] as { text?: string }).text ?? ''
                  : ''
              )
              .filter((line): line is string => !!line)
              .join("\n");
            apiRef.current.tex(text);
            sessionStorage.setItem('alphatex-editor.code', text);
        }} />
      </div>
      <KeyboardReact keyboardRef={(r) => (keyboardRef.current = r)}
          layoutName={layoutName}
          onKeyPress={onKeyPress} />
    </div>
  );
};

export default App;