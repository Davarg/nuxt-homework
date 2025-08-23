export interface Post {
  icon: string;
  author: string;
  date: Date;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
}

export function createDefaultPost(): Post {
  return {
    icon: "logo",
    author: "Помидорчик",
    date: new Date(),
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis gravida metus. Etiam finibus urna et pellentesque facilisis. Sed condimentum ullamcorper sollicitudin. Sed vestibulum luctus sapien, sit amet cursus elit fermentum at. Proin lectus dui, vestibulum at eleifend eget, fermentum ut elit. Nam pellentesque ac metus ac placerat. Etiam semper lectus ipsum, ut congue magna eleifend ut. Aliquam venenatis tortor eu gravida malesuada. Donec sagittis sodales ipsum. Vestibulum et pulvinar est, non aliquam lectus. Suspendisse potenti. Nam at rhoncus ligula. Maecenas non accumsan quam. Integer laoreet lacus turpis, lacinia venenatis quam ultricies et. Sed ut interdum quam, non sodales neque. Donec vehicula leo et dui commodo pellentesque. In tristique lacus sed posuere blandit. Nunc elementum, nulla pretium tristique ullamcorper, ipsum lorem maximus urna, sed congue nisi eros sit amet sem. Donec sem felis, dignissim ac egestas ut, consectetur at ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam consectetur consectetur tellus, in tristique massa mollis commodo. Donec dictum ante et augue tristique accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris diam purus, ultrices eu odio nec, aliquet tincidunt lectus. Nulla a lorem id tortor imperdiet lacinia. Vivamus suscipit purus non risus hendrerit, quis hendrerit urna pulvinar. Nunc eu viverra lorem, vitae tincidunt massa. Vestibulum venenatis tincidunt dignissim. Sed vestibulum orci et est lobortis egestas. Ut elit felis, rhoncus vel ornare at, fringilla non nisi. Mauris nibh leo, condimentum in aliquet quis, aliquam ut mauris. Etiam sed erat laoreet, ultricies elit eu, malesuada ante. In mollis tellus lacus, et laoreet ligula luctus eget. Ut vitae tellus facilisis, tincidunt mi ut, tincidunt nisl. Maecenas diam turpis, ullamcorper eu porttitor nec, vehicula at neque. Cras eu consequat risus. Etiam eget velit tincidunt nisi dignissim aliquam. Donec purus sem, varius eget tincidunt eu, iaculis condimentum quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque dignissim sapien non ullamcorper. Duis quis risus pretium, accumsan diam nec, eleifend libero. Morbi a turpis eget neque hendrerit vulputate quis non metus. Sed a eros sed felis vehicula tempus. Fusce ullamcorper nisi metus, vel vestibulum ex euismod ac. Etiam posuere vestibulum lectus eget eleifend. Quisque et commodo elit. Aliquam porta odio eu augue congue scelerisque. Fusce ut est congue, varius purus id, luctus sem. Aenean eget scelerisque lectus. Aliquam semper vestibulum libero. Morbi convallis lorem mauris, non dignissim nisl vehicula non. Praesent ac placerat ex. Aenean libero odio, fringilla a erat quis, convallis eleifend turpis. Sed tristique aliquam neque, ut rutrum dolor finibus vitae. Integer ipsum orci, posuere at urna ac, ultrices mattis justo. Donec tincidunt est eu massa sagittis, quis fermentum turpis varius. Nam dictum dapibus eros, at feugiat lectus maximus luctus. Cras eu lorem ipsum. Curabitur ut faucibus massa.",
    likes: 10,
    dislikes: 1,
  };
}
