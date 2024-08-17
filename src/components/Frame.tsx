import { JSX } from "preact/jsx-runtime";

type Props = {
    source: string
} & JSX.HTMLAttributes<HTMLIFrameElement>

export default function Frame(props: Props) {
    return <iframe
    {...props}
    className="aspect-video rounded-md w-full"
    src={props.source + '&autoplay=1&mute=1'}
    allow="autoplay"
  />
}