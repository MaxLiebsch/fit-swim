import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';

interface Props {
  content: SerializedEditorState;
  className?: string;
}

const RichText = ({ content }: Props) => {
  return (
    <LexicalRichText data={content} />
  )
}

export default RichText