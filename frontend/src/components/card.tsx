import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
type TeamProps = {
  school: string;
  name: string;
  city: string;
  state: string;
};
export default function Card(props: TeamProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.school} {props.name}
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto">
          <div>City</div>
          <div>
            {props.city}, {props.state}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto">
          <div>Record</div>
          <div>info unavailable</div>
        </div>
      </div>
    </div>
  );
}
