"use client";
import { useForm, Controller } from "react-hook-form";
import styles from "./landingpage/LandingPage.module.css";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedData = sessionStorage.getItem("formData");
    const parsedData = storedData ? JSON.parse(storedData) : {};

    const updatedData = { ...parsedData, ...data };

    sessionStorage.setItem("formData", JSON.stringify(updatedData));
    router.push("/secretpage");
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto">
        {/* Left Section (Form) */}
        <div className="flex flex-col p-6 sm:p-12 sm:w-1/2 w-full">
          <p className={styles.title}>Say Hello to Drew!</p>
          <h1 className={styles.subtitle}>
            Your MVP is Here, Time to Dominate.
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label htmlFor="name" className={styles.lableText}>
              Let’s make it official. What’s your name?
            </label>
            <input
              id="name"
              type="text"
              className={styles.inputField}
              style={{ marginBottom: "0.5rem" }}
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name.message}</p>
            )}

            <label htmlFor="email" className={styles.lableText}>
              Where should I send your daily dose of real estate brilliance?
            </label>
            <input
              id="email"
              type="email"
              className={styles.inputField}
              style={{ marginBottom: "0.5rem" }}
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}

            <label htmlFor="phone" className={styles.lableText}>
              Phone number, please. Drew’s calling magic is just one step away.
            </label>
            <div className={styles.inputContainer}>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="US"
                    className={styles.phoneInput}
                  />
                )}
              />
            </div>
            {errors.phone && (
              <p className={styles.errorMessage}>{errors.phone.message}</p>
            )}

            <label htmlFor="brokerage" className={styles.lableText}>
              Who’s your crew? Brokerage name, please!
            </label>
            <input
              id="brokerage"
              type="text"
              style={{ marginBottom: "0.5rem" }}
              className={styles.inputField}
              {...register("brokerage", {
                required: "Brokerage name is required",
              })}
              placeholder="Enter your current brokerage"
            />
            {errors.brokerage && (
              <p className={styles.errorMessage}>{errors.brokerage.message}</p>
            )}

            <label htmlFor="website" className={styles.lableText}>
              Any personal site I should bookmark for inspiration?
            </label>
            <input
              id="website"
              type="text"
              style={{ marginBottom: "0.5rem" }}
              className={styles.inputField}
              placeholder="Enter Personal Website"
              {...register("website", {
                required: "Personal website is required",
              })}
            />
            {errors.website && (
              <p className={styles.errorMessage}>{errors.website.message}</p>
            )}

            <label htmlFor="teamName">
              Your team’s website where should Drew look? (optional)
            </label>
            <input
              id="teamName"
              type="text"
              style={{ marginBottom: "0.5rem" }}
              className={styles.inputField}
              placeholder="Enter Personal Website"
              {...register("teamName")}
            />

            <label htmlFor="teamWebsite" className={styles.lableText}>
              Team Website (optional)
            </label>
            <input
              id="teamWebsite"
              style={{ marginBottom: "0.5rem" }}
              type="text"
              className={styles.inputField}
              placeholder="Enter Team Website"
              {...register("teamWebsite")}
            />
            {errors.teamWebsite && (
              <p className={styles.errorMessage}>
                {errors.teamWebsite.message}
              </p>
            )}

            <div className="flex justify-between items-center mt-4">
              <button type="submit" className={styles.button}>
                Lets Go →
              </button>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must agree to the terms.",
                  })}
                />
                <label htmlFor="terms" className="ml-2">
                  I agree to the Terms & Condition
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right Section (Image) */}
        <div className={`${styles.imageSection} hidden sm:block sm:w-1/2`}>
          <Image
            src="/images/Picture1.jpg"
            alt="Form Image"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
