import { NavBar } from "../../components"
import {
  HomePage,
  AboutUsPage,
  ServicesPage,
  ValuesPage,
  WorkPage,
  ContactUsPage,
  StaffPage,
} from "..";

export function GlobalPage() {
  return (
    <>
      <NavBar />

      <div className="scroll">
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <AboutUsPage />
        </section>

        <section id="services">
          <ServicesPage />
        </section>

        <section>
          <StaffPage />
        </section>

        <section id="values">
          <ValuesPage />
        </section>

        <section id="work">
          <WorkPage />
        </section>

        <section id="contact">
          <ContactUsPage />
        </section>
      </div>
    </>
  );
}
