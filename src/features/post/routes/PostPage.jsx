import { useSearchParams } from 'react-router-dom'
import ArticleForm from '@/features/articles/components/ArticleForm'
import QuestionForm from '@/features/questions/components/QuestionForm'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useEffect } from 'react'


const PostPage = () => {
  const [postType, setPostType] = useState('question')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const typeParam = searchParams.get('type')
    if (typeParam === 'article' || typeParam === 'question') {
      setPostType(typeParam)
    }
  }, [searchParams])

  const prompt = postType === 'question' ? 'ask a question' : 'write an article'

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-8">
        <h1 className="text-5xl font-bold">Make a difference</h1>
        <div className="flex w-full gap-2 items-center justify-center">
            <span>I want to…</span>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{prompt}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuItem onSelect={() => setPostType('question')}>
                ask a question
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setPostType('article')}>
                write an article
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
    </div>
  )
}

export default PostPage