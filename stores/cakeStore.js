import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CakeStore {
  cakes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCakes = async () => {
    try {
      const response = await instance.get("/cakes");
      this.cakes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchCakes: ", error);
    }
  };

  getCakeById = (cakeId) =>{
    return this.cakes.find((cake) => cake.id === +cakeId);
  }
}

const cakeStore = new CakeStore();
cakeStore.fetchCakes();

export default cakeStore;



