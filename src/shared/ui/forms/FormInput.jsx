import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const FormInput = ({ label, input, inputType, description, className, value, onChange }) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label className="font-bolder" htmlFor={input}>
        {label}
      </Label>

      {inputType === "text" ? (
        <Input id={input} name={input} type="text" value={value} onChange={onChange} />
      ) : inputType === "textArea" ? (
        <Textarea className="h-full" id={input} name={input} value={value} onChange={onChange} />
      ) : null}

      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default FormInput;