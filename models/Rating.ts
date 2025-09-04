export interface Rating {
    id: number;
    action: RatingAction;
}

export enum RatingAction {
    liked = "liked",
    disliked = "disliked"
}