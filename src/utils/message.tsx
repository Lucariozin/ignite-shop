import { toast } from 'react-toastify'

export const message = (message?: string) => {
  toast(message ?? '')
}
