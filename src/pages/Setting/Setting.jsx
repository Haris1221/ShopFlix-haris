import React, { useState } from 'react';
import './Setting.css';
import { editUser } from '../../utilities/users-api';
import { getUser } from '../../utilities/users-service';
export default function Setting({ setUser, user }) {
  const [states, setStates] = useState({ name: '', profilePic: '' });
  function handleName(e) {
    e.preventDefault();
    setStates({ name: e.target.value, profilePic: states.name });
  }
  function handleProfilePic(e) {
    e.preventDefault();
    setStates({ name: states.name, profilePic: e.target.value });
  }
  function handleSubmit(e) {
    console.log(states);
    e.preventDefault();
    console.log(states);
    async function Edit() {
      console.log(states);
      const edit = await editUser(states);
      console.log(edit);
      const temp = { ...user };
      temp.name = states.name;
      temp.profilePic = states.profilePic;
      setUser(temp);
    }
    Edit();
  }
  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">
          Edit username
          <input type="text" name="username" onChange={handleName} />
        </label>
        <label for="profilePic">
          Edit profile pic
          <select onChange={handleProfilePic}>
          
              <option
                className="profilePic"
                style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")'}}
                value="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              />
      
              <option
                className="profilePic"
                style={{backgroundImage:'url("https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg")'}}
                value="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
              />
            
              
              <option
                className="profilePic"
                style={{backgroundImage:'url(" https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg")'}}
                value="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
              />
            
              
              <option
                className="profilePic"
                style={{backgroundImage:'url(" https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg")'}}
                value="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"
              />
            
              

              <option 
              className="profilePic"
                style={{backgroundImage:'url(" https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57")'
              }}
                
                
                value="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"
              />
            
              

              <option 
              className="profilePic"
                style={{backgroundImage:'url(" https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06")'
              }}
                
                
                value="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06"
              />
            
              
              <option
                className="profilePic"
                style={{backgroundImage:'url("https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg")'
                              }}
                value="https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg"
              />
            
              

              <option 
              className="profilePic"
                style={{backgroundImage:'url("https://i.pinimg.com/736x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg")'
             }}
                
                
                value="https://i.pinimg.com/736x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg"
              />
            
              

              <option 
              className="profilePic"
                style={{backgroundImage:'url("https://icon-library.com/images/netflix-icon-black/netflix-icon-black-19.jpg")'}}
                
                
                value="https://icon-library.com/images/netflix-icon-black/netflix-icon-black-19.jpg"
              />
            
              
              <option
                className="profilePic"
                style={{backgroundImage:'url(" https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-62wgyitks6f4l79m.jpg")'
                              }}
                value="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-62wgyitks6f4l79m.jpg"
              />
          
          </select>
        </label>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
     
    </div>
  );
}
