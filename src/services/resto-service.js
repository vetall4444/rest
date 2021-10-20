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
  async setCart(itemsToPost) {
    const count = await this.getOrderNumber();
    const newOrder = {
      id: count,
      order: itemsToPost,
    };
    await fetch("http://localhost:3000/cartPost", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
    });
  }
  async getOrderNumber() {
    const res = await fetch("http://localhost:3000/cartPost").then((res) =>
      res.json()
    );
    console.log(res.length);
    const orderNumber = res.length + 1;

    return orderNumber;
  }
}
