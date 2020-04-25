import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iGA5rupzqpHoB7EC9xpKJUsUs6PMbWGxDDpG9hnhTJY"
  }
});