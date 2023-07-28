import { set, ref } from 'firebase/database'
import { firebaseDB } from '../config/db.config'
import { v4 } from 'uuid'

interface Player {
  name: string
  id?: string
}

export default class DatabaseService {
  public savePlayerData({ name }: Player) {

    set(ref(firebaseDB, 'users/' + name), {
      username: name,
      id: v4(),
    })
  }

  public verifyRoomExists(): boolean {

    return false
  }

  public createRoom() {

  }


}
