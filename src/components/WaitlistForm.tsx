import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'

type WaitlistFormProps = {
  className?: string
  inputClassName?: string
  buttonClassName?: string
  buttonLabel?: string
  placeholder?: string
  ariaLabel?: string
}

const cx = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

function WaitlistForm({
  className,
  inputClassName,
  buttonClassName,
  buttonLabel = 'Join Waitlist',
  placeholder = 'Enter your work email',
  ariaLabel = 'Work email address',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: trimmedEmail, created_at: new Date().toISOString() }])

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          setMessage({ type: 'error', text: 'This email is already on the waitlist!' })
        } else {
          setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
        }
        console.error('Error adding to waitlist:', error)
      } else {
        setMessage({ type: 'success', text: 'Successfully joined the waitlist!' })
        setEmail('')
        // Clear success message after 3 seconds
        setTimeout(() => setMessage(null), 3000)
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
      console.error('Unexpected error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form className={cx('waitlist-form', className)} onSubmit={handleSubmit}>
        <input
          className={inputClassName}
          type="email"
          name="waitlistEmail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          aria-label={ariaLabel}
          required
          disabled={isLoading}
        />
        <button className={buttonClassName} type="submit" disabled={isLoading}>
          {isLoading ? 'Joining...' : buttonLabel}
        </button>
      </form>
      {message && (
        <div
          style={{
            marginTop: '12px',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            textAlign: 'center',
            backgroundColor: message.type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
            color: message.type === 'success' ? '#4ade80' : '#f87171',
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}

export default WaitlistForm

