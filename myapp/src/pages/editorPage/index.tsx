import { Editor } from 'amis-editor';
export default function EditorPage(props: any) {
  const editorDefaultProps = {
    onChange: () => console.log('改变了'),
    value: {},
    ...props,
  };
  return <Editor {...editorDefaultProps} />;
  //   return <div />;
}
