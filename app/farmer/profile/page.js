import Footer from "@/app/components/footer";
import style from "./page.module.css";
// import NavBar from "@/app/components/navbar";

export default function ProfilePage() {
  return (
    <>
      {/* <NavBar /> */}
      <main id={style.main}>
        <ProfileCard
          name={d_profile.name}
          address={d_profile.address}
          phone={d_profile.phone}
          email={d_profile.email}
        />
        <InfoCards />
      </main>
      {/* <Footer /> */}
    </>
  );
}


export function ProfileCard({ name, address, phone, email, callMe }) {
  return (
    <div className={style["profile-card"]}>
      {/* <div className={style['banner']}></div> */}
      <div className={style["details"]}>
        <div className={style["banner"]}>
          <div className={style["profile-pic"]}>
            <img className={style["profile-img"]} src="/pics/farmer2.jpg" />
            <div className={style["profile-add-btn"]}>{callMe ? "📞":"➕"}</div>
          </div>
          <div className={style["banner-shape"]}></div>
        </div>

        <div className={style["name"]}>{name}</div>
        <div className={style["address"]}>📌 {address}</div>
        <div className={style["phone"]}>📞 {phone}</div>
        <div className={style["email"]}>📧 {email}</div>
      </div>
    </div>
  );
}

function InfoCards() {
  return (
    <div id={style["info-cards"]}>
      {/* <Card
        title={"Biography"}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium cum nam nemo distinctio dignissimos minus fuga rem tempora, saepe suscipit nesciunt, velit sint dolorum cumque?"
        }
      /> */}
      {d_cards.map(({ title, body }, i) => (
        <Card key={i} title={title} body={body} />
      ))}
    </div>
  );
}

function List({ items }) {
  return (
    <ol className={style["list"]}>
      {items.map((item, i) => (
        <li className={style["list-item"]} key={item}>
          {i}. {item}
        </li>
      ))}
    </ol>
  );
}

function Card({ title, body }) {
  return (
    <div className={style["info-card"]}>
      <div className={style["card-header"]}>
        <div className={style["card-title"]}>{title}</div>
        <div className={style["action-buttons"]}>
          <AddBtn />
          <EditBtn />
        </div>
      </div>
      {Boolean(body) && <div className={style["card-body"]}>{body}</div>}
    </div>
  );
}

function AddBtn({ className }) {
  return <div className={[style["action-btn"], className]}>➕</div>;
}

function EditBtn() {
  return <div className={style["action-btn"]}>✏️</div>;
}

// Site content

const d_cards = [
  {
    title: "Biography",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium cum nam nemo distinctio dignissimos minus fuga rem tempora, saepe suscipit nesciunt, velit sint dolorum cumque?",
  },
  {
    title: "Types of Farming",
    body: "",
  },
  {
    title: "Tools/Technologies Owns",
    body: <List items={["Tracker", "Plough", "Hoe, Shovel"]} />,
  },
  {
    title: "Crop Grown",
    body: <List items={["Wheat", "Paddy", "Maize", "Sugarcane"]} />,
  },
];

const d_profile = {
  name: "RAMPAL SINGH",
  address: "Premnagar, Dehradun, Uttarakhand",
  phone: "+919876054321",
  email: "singhrampal1980@gmail.com",
};
