'use client'
 
import { useFormStatus } from 'react-dom'
 
export default function Button(props: {
  title : string,
  classes : string
}) {
  const { pending } = useFormStatus()
  const { title , classes } = props
  
  return (
    <button type="submit" 
      disabled={pending}
      className={classes}
      >
      {title}
    </button>
  )
}