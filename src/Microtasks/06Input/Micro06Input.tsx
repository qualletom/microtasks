import {useState} from "react";
import {Input} from "./Input";

export type ServerMessageType = {
    message: string;
}

export function Micro06Input() {
    const [serverMessages, setServerMessages] = useState<ServerMessageType[]>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (message: string) => {
        setServerMessages(prev => [{message}, ...prev]);
    }

    return (
        <div className="App" style={{textAlign: 'center', marginTop: "20px"}}>
            <Input onButtonClick={addMessage}/>
            {serverMessages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}
