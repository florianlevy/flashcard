import firebase from 'firebase'
import { FlashCard } from '../../types/FlashCard.type'



const FLASHCARD_COLLECTION = 'flash-cards'

export class FlashCardService {
  async saveFlashCard(card: FlashCard) {
    if (!card.userId) {
      card.userId = await firebase.auth().currentUser?.uid
    }
    if (card.id){
      await firebase.firestore().collection(FLASHCARD_COLLECTION).doc(card.id).update(card)
    }else {
      await firebase.firestore().collection(FLASHCARD_COLLECTION).add(card)
    }
  }

  async getFlashCards(): Promise<Array<FlashCard>> {
    const userId = await firebase.auth().currentUser?.uid
    const result = await firebase.firestore().collection(FLASHCARD_COLLECTION).where("userId", "==", userId).get()
    return result.docs.map(doc => {
      const flashCard = doc.data() as FlashCard
      flashCard.id = doc.id
      return flashCard
    })
  }
}
