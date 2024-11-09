{
  //

  // Sample Input
  // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(updateProfile(myProfile, { age: 26 }));

  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  function updateProfile(myProfile: Profile, updateInfo: Partial<Profile>) {
    const updatedProfile = {
      ...myProfile,
      ...updateInfo,
    };
    return updatedProfile;
  }

  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
