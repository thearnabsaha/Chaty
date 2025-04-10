import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardDescription} from "@/components/ui/card";
import { BsChat} from "react-icons/bs";
import JoinRoom from "./JoinRoom";
const CreateRoom = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center font-mono'>
      <Card className='w-[600px]'>
        <CardContent>
            <div className="flex justify-between">
                <div className='flex items-center mb-2'>
                    <BsChat className='text-3xl mr-4'/>
                    <h1 className=' text-2xl font-bold'>Real Time Chat</h1>
                </div>
                <ModeToggle/>
            </div>
          <CardDescription>
            <p className='text-shadow-accent-foreground font-bold'>Temporary room that expires after both users exit</p>
          </CardDescription>
        </CardContent>
        <JoinRoom/>
      </Card>
    </div>
  )
}

export default CreateRoom