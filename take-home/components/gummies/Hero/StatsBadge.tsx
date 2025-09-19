import { IconType } from "react-icons";

interface StatsBadgeProps {
    icon: IconType;
    text: string;
}

const StatsBadge = ({icon: Icon, text}: StatsBadgeProps) => {
    return (
        <div className="flex gap-2 items-center border rounded-2xl border-muted text-muted px-3 py-2">
            <Icon />
            <span>{text}</span>
        </div>
    );
}
 
export default StatsBadge;