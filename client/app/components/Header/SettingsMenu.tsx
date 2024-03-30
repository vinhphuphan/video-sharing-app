import {
  ChevronRight,
  CircleHelp,
  Globe,
  Keyboard,
  Languages,
  MessageSquareWarning,
  Moon,
  Settings,
  ShieldCheck,
  ShieldPlus,
} from "lucide-react";
import Button from "../Button";

const SettingsMenu = () => {
  return (
    <div className="flex flex-col w-full py-2">
      <Button variant="setting" size="setting">
        <ShieldCheck strokeWidth={1.5} size={20} />
        <div className="">Your data in Youtube</div>
      </Button>

      <Button variant="setting" size="setting">
        <Moon strokeWidth={1.5} size={20} />
        <div className="">Appearance: Device theme</div>
        <div className="absolute right-5">
          <ChevronRight strokeWidth={1} />
        </div>
      </Button>

      <Button variant="setting" size="setting">
        <Languages strokeWidth={1.5} size={20} />
        <div className="">Language: English</div>
        <div className="absolute right-5">
          <ChevronRight strokeWidth={1} />
        </div>
      </Button>

      <Button variant="setting" size="setting">
        <ShieldPlus strokeWidth={1.5} size={20} />
        <div className="">Restricted Mode: Off</div>
        <div className="absolute right-5">
          <ChevronRight strokeWidth={1} />
        </div>
      </Button>

      <Button variant="setting" size="setting">
        <Globe strokeWidth={1.5} size={20} />
        <div className="">Location: VietNam</div>
        <div className="absolute right-5">
          <ChevronRight strokeWidth={1} />
        </div>
      </Button>

      <Button variant="setting" size="setting">
        <Keyboard strokeWidth={1.5} size={20} />
        <div className="">Keyboard shortcuts</div>
      </Button>

      <div className="py-2">
        <hr />
      </div>
      <Button variant="setting" size="setting">
        <Settings strokeWidth={1.5} size={20} />
        <div className="">Settings</div>
      </Button>

      <div className="py-2">
        <hr />
      </div>
      <Button variant="setting" size="setting">
        <CircleHelp strokeWidth={1.5} size={20} />
        <div className="">Help</div>
      </Button>

      <Button variant="setting" size="setting">
        <MessageSquareWarning strokeWidth={1.5} size={20} />
        <div className="">Send Feedback</div>
      </Button>
    </div>
  );
};

export default SettingsMenu;
