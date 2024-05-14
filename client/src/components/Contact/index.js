/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { gsap } from 'gsap/dist/gsap';

import { getClassNames } from 'shared';
import { SERVICES } from 'data/data';
import { useRouter } from 'next/router';

import { StyledContact } from './styles';

export default function ContactForm({ theme }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      services: [],
      body: '',
    },
  });

  const [isInputHidden, setIsInputHidden] = useState(false);
  const [isFormValid, setIsFormValid] = useState(isValid);
  const [submitError, setSubmitError] = useState(false);

  const router = useRouter();
  const isContactPage = router.pathname === '/contact';

  useEffect(() => {
    setIsFormValid(isValid);
    setSubmitError(false);
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        services: [],
        body: '',
      });
    }
  }, [isValid, isSubmitSuccessful, reset]);

  const contactRoute = '/api/contact';

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = {
      Name: data.name,
      Email: data.email,
      Topic: data.services,
      Message: data.body,
    };

    try {
      const response = await fetch(contactRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.status === 201) {
        await response.json();
      }
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  useEffect(() => {
    if (isContactPage) return;
    setTimeout(() => {
      gsap.to('.target-1', {
        y: 90,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-trigger',
          start: '50% 50%',
          end: 'bottom 0',
          toggleActions: 'play none none reverse',
          onToggle: (self) => {
            setIsInputHidden(!self.isActive);
          },
        },
      });
      gsap.to('.target-2', {
        y: 180,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-trigger',
          start: '50% 50%',
          end: 'bottom 0',
          toggleActions: 'play none none reverse',
        },
      });
      gsap.to('.target-3', {
        y: 270,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-trigger',
          start: '50% 50%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, 1000);
  }, [isContactPage]);

  return (
    <StyledContact
      className={getClassNames(isContactPage ? 'contacts' : `section-${theme}`)}
      theme={theme}
    >
      <div className="content-container contact contact-trigger">
        {!isContactPage && (
          <>
            <span className="contact__pre-title" data-scroll={!isContactPage}>
              Transform Your Vision – Let's Craft the Ultimate Solution
            </span>
            <h2 className="contact__title" data-scroll={!isContactPage}>
              Let’s talk
            </h2>
          </>
        )}
        <span className="contact__tip" data-scroll={!isContactPage}>
          Service (you can choose few)
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact__form"
          data-scroll={!isContactPage}
        >
          <ul className="contact__services">
            {SERVICES.map((serviceItem, index) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={index} className="contact__services__label">
                <input
                  type="checkbox"
                  {...register('services', {
                    required:
                      'Please select at least one service or choose "Other"',
                  })}
                  className="checkbox"
                  value={serviceItem}
                />
                <div
                  className={getClassNames(
                    'border-wrapper',
                    theme === 'light' ? 'border-wrapper--light' : ''
                  )}
                >
                  <svg
                    width="431"
                    height="106"
                    viewBox="0 0 431 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M429.762 53.3574C429.762 60.3144 423.974 67.0914 
                      413.116 73.3598C402.295 79.6068 386.604 85.2495 367.171 
                      89.9948C328.313 99.4835 274.604 105.357 215.262 105.357C155.919 
                      105.357 102.211 99.4835 63.3524 89.9948C43.9193 85.2495 28.2282 
                      79.6068 17.4075 73.3598C6.54984 67.0914 0.761719 60.3144 0.761719 
                      53.3574C0.761719 46.4004 6.54984 39.6234 17.4075 33.3551C28.2282 
                      27.108 43.9193 21.4653 63.3524 16.72C102.211 7.23139 155.919 1.35742 
                      215.262 1.35742C274.604 1.35742 328.313 7.23139 367.171 16.72C386.604 
                      21.4653 402.295 27.108 413.116 33.3551C423.974 39.6234 429.762 46.4004 
                      429.762 53.3574Z"
                      stroke={theme === 'dark' ? '#FAF7F5' : '#1A1A1A'}
                    />
                  </svg>
                  <span>{serviceItem}</span>
                </div>
              </label>
            ))}
            {errors?.services && (
              <p className="contact__services__error">
                {errors.services.message}
              </p>
            )}
          </ul>
          <div
            className={getClassNames(
              'contact__animation-wrapper',
              isContactPage && 'no-animation'
            )}
          >
            <label
              className={getClassNames(
                'contact__label',
                isInputHidden && 'hidden'
              )}
              htmlFor="name"
            >
              <div className="contact__label__border" />
              <input
                type="text"
                name="name"
                {...register('name', {
                  required: 'Name is required',
                })}
                placeholder="What is your name?"
                className={getClassNames(
                  'input-hidden',
                  isFormValid && 'valid',
                  errors?.name && 'invalid'
                )}
              />
              {errors?.name && (
                <p className="contact__label__error">{errors.name.message}</p>
              )}
            </label>

            <label
              className={getClassNames(
                'contact__label target-1',
                isInputHidden && 'hidden'
              )}
              htmlFor="email"
            >
              <div className="contact__label__border" />
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    id="email"
                    className={getClassNames(
                      'input-hidden',
                      isFormValid && 'valid',
                      errors?.email && 'invalid'
                    )}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="What is your email?"
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                )}
              />
              {errors?.email && (
                <p
                  className={getClassNames(
                    'contact__label__error',
                    isInputHidden && 'hidden'
                  )}
                >
                  {errors.email.message}
                </p>
              )}
            </label>

            <label
              className={getClassNames(
                'contact__label target-2',
                isInputHidden && 'hidden'
              )}
              htmlFor="body"
            >
              <div className="contact__label__border" />
              <input
                type="text"
                name="body"
                {...register('body', {
                  minLength: {
                    value: 10,
                    message: 'Message body must be at least 10 characters',
                  },
                  required: 'Message body is required',
                })}
                placeholder="Add message here"
                className={getClassNames(
                  'input-hidden',
                  isFormValid && 'valid',
                  errors?.body && 'invalid'
                )}
              />
              {errors?.body && (
                <p className="contact__label__error">{errors.body.message}</p>
              )}
            </label>

            {submitError && <p className="validation-error">{submitError}</p>}
            <div className="contact__button-wrapper target-3">
              <button type="submit" className="contact__services__button">
                {isSubmitting
                  ? 'Submitting...'
                  : isSubmitSuccessful
                  ? 'Submitted'
                  : 'Send A Request'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </StyledContact>
  );
}
