const QuestionListItem = ({question}) => {

   const date = new Date(question.timestamp).toLocaleDateString()

   return (
      <div className="w-full h-[1.5rem] grid grid-rows-1 grid-cols-12 gap-2 py-1">
         <p className="col-span-4 min-w-0 text-sm leading-none font-medium truncate">{question.title}</p>
         <p className="col-span-7 min-w-0 text-sm leading-none truncate">{question.body}</p>
         <p className="col-span-1 min-w-0 text-sm leading-none truncate">{date}</p>
      </div>
   ) 
}

export default QuestionListItem