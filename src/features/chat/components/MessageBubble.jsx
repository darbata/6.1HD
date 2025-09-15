const MessageBubble = ({message, fromUser}) => {
    return (
        <div className="w-full flex ">
            <p className={`
                ${fromUser ? "ml-auto" : "mr-auto"}
                ${fromUser ? "bg-blue-300" : "bg-green-300"}
                p-2
                mt-2
                mb-2
                rounded-xl
                max-w-[200px]
            `}>{message.content}</p>
        </div>
    )
}

export default MessageBubble 