import {
    Table,
    Model,
    DataType,
    Column,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript';

@Table({
    timestamps: true,
})
export default class Subscription extends Model<Subscription> {
    @Column(DataType.STRING)
    public email!: string;

    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date;

    public static async exist(email: string): Promise<boolean> {
        const subscriptions = await Subscription.findAll({
            where: {
                email
            }
        });

        return subscriptions.length !== 0;
    }
}
