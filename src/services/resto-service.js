export default class RestoService {
  async getMenuItems() {
    const arr = await fetch("http://localhost:3000/menu").then((data) =>
      data.json()
    );
    return arr;
  }
  async getItem(id) {
    const item = await fetch("http://localhost:3000/menu/" + id).then((data) =>
      data.json()
    );
    return item;
  }
}
