import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";


const SubmitBtn = ({submitButtonText}: {submitButtonText: string}) => {

  const { pending } = useFormStatus();
  return (
    <Button variant='default' type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={pending}>
      {submitButtonText}
      {pending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default SubmitBtn;
