import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormField {
  name: string;
  label: string;
  type: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: any) => void;
}

export function Form({ fields, onSubmit }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input type={field.type} id={field.name} name={field.name} />
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}

