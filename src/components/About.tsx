import { FC } from "react";
import { Briefcase, GraduationCap, Phone, Mail } from "lucide-react";
import Resume from "@/components/Curriculo";

const SobreContent: FC = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-8 h-100 overflow-hidden">
      <Resume />
    </div>
  );
};

export default SobreContent;
