import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity() // Déclare cette classe comme une entité TypeORM
export class User {
  @ObjectIdColumn() // Correspond au champ _id de MongoDB
  id: ObjectId;

  @Column({ unique: true }) // Définit un champ unique
  username: string;

  @Column() // Définit un champ normal
  password: string;

  @Column({ nullable: true }) // Permet au champ d'être facultatif
  email?: string;

  @Column({ default: 0 }) // Définit une valeur par défaut
  points: number;
}
