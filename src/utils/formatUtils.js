import { GENDER, LOCAL_DATE_FORMAT } from '@/constants/enums.js'

export function checkNull(value) {
  if (isEmpty(value)) {
    return '---'
  }
  return value
}

export function formatDate(date) {
  if (isEmpty(date)) {
    return '---'
  }
  return new Date(date).toLocaleDateString(LOCAL_DATE_FORMAT, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export function parseTags(tagString) {
  if (!tagString) return []
  try {
    const tags = JSON.parse(tagString)
    return Array.isArray(tags) ? tags : []
  } catch {
    return []
  }
}

export function formatGender(gender) {
  if (gender === 0) return GENDER.MALE
  if (gender === 1) return GENDER.FEMALE
}

function isEmpty(value) {
  return value === null || value === undefined || value === ''
}
