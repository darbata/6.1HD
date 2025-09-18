const QuestionListItem = ({question}) => {
   return (
      <div className="w-full h-[1.5rem] grid grid-rows-1 grid-cols-12 gap-2 py-1">
         <p className="col-span-4 min-w-0 text-sm leading-none font-medium truncate">{question.title}</p>
      </div>
   ) 
}

export default QuestionListItem