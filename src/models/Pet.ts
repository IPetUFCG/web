// schema
// id              Int               @id @default(autoincrement())
// name            String            @db.VarChar(255)
// age             Int?
// adoptionId      Int?              @unique
// adoption        Adoption?
// helpRequest     HelpRequest[]
// reports         Report[]
// universityPlace UniversityPlace[] @relation("PetToUniversityPlace")
// users           User[]            @relation("PetToUser")
// photos          Attachment[]
// careTakerId     Int?
// careTaker       User?             @relation("PetToCareTaker", fields: [careTakerId], references: [id])
// createdAt DateTime  @default(now()) @db.Timestamp(6)
// updatedAt DateTime  @updatedAt

export class Pet {
  readonly name;
  readonly age;

  constructor(obj: any) {
    try {
      if (!obj?.name || typeof obj.name !== "string")
        throw new Error("invalid pet name");
      if (!obj?.age || typeof obj.age !== "number")
        throw new Error("invalid pet age");

      this.name = obj.name;
      this.age = obj.age;
    } catch (e) {
      throw e;
    }
  }
}
