import cache from "@mongez/cache";
import {
  User as BaseUser,
  setCurrentUser,
  UserCacheDriverInterface,
  UserInterface,
} from "@mongez/user";

class User extends BaseUser implements UserInterface {
  /**
   * Cache driver
   */
  protected cacheDriver: UserCacheDriverInterface = cache;
  /**
   * {@inheritDoc}
   */
  public getCacheKey(): string {
    return "usr";
  }

  /**
   * Determine if current user is guest
   */
  public isGuest(): boolean {
    return this.get("userType") === "guest";
  }

  /**
   * Check if user has an access token
   */
  public get hasAccessToken(): boolean {
    return !!this.get("accessToken");
  }

  /**
   * Get user name
   */
  public get name(): string {
    return this.get("name");
  }
}

const user: User = new User();

// boot the class
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;
