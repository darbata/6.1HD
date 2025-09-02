import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const FormInput = ({ label, input, inputType, description, className }) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label className="font-bolder" htmlFor={input}>
        {label}
      </Label>

      {inputType === "text" ? (
        <Input id={input} name={input} type="text" />
      ) : inputType === "textArea" ? (
        <Textarea className="h-full" id={input} name={input} />
      ) : null}

      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default FormInput;