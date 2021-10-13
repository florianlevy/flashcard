import { FlashCardService } from './FlashCard/FlashCar'

export interface Services {
  flashCard: FlashCardService
}

export const initService = (): Services => {
  return {
    flashCard: new FlashCardService()
  }
}
