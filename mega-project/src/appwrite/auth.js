import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client;
  account;

  constructor() {
    if (!conf.appwriteUrl || !conf.appwriteProjectId) {
      throw new Error(
        "AuthService initialization error: Appwrite URL or Project ID is missing in conf.js",
      );
    }

    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return this.login({ email, password });
    } catch (error) {
      console.error("AuthService :: createAccount :: error", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("AuthService :: login :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.warn("AuthService :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout(sessionId = null) {
    try {
      if (sessionId) {
        await this.account.deleteSession(sessionId);
      } else {
        await this.account.deleteSessions();
      }
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
