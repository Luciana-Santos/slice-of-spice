import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Grid } from '../../GlobalStyles';
import { ButtonStyled } from '../UI/Button.styled';
import Input from '../UI/Input';
import { FormStyled } from '../UI/Input.styled';
import { ParagraphStyled } from '../UI/Paragraph.styled';
import { TitlesStyled } from '../UI/Titles.styled';
import {
  FieldsetStyled,
  ReservationConfirmed,
  ReservationConfirmedTitle,
  ReservationInfo,
  ReservationsStyled,
} from './Reservations.styled';

const schema = yup.object().shape({
  fullName: yup.string().required("Can't be empty."),
  phone: yup
    .string()
    .matches(/^(\(\d{2}\))?\s?\d{4,5}-\d{4}$/, 'Invalid format.')
    .required("Can't be empty."),
  numPeople: yup
    .number()
    .min(1, 'You must select at least 1.')
    .max(8, "You can't select more than 8.")
    .required("Can't be empty."),
  date: yup
    .date()
    .required("Can't be empty.")
    .nullable()
    .typeError('Invalid date format'),
  hour: yup
    .string()
    .matches(/^([1][4-9]|2[0-2]):[0-5][0-9]$/, 'Invalid time format')
    .required("Can't be empty."),
});

const Reservations = () => {
  const [formData, setformData] = useState({});
  const [formSent, setformSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      phone: '',
      numPeople: 1,
      date: new Date().toISOString().substr(0, 10),
      hour: '',
    },
  });

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    setformSent(true);
    setformData(data);
  };

  return (
    <ReservationsStyled id="reservations">
      <div>
        <TitlesStyled size="40px">Reservations</TitlesStyled>

        <ParagraphStyled marginBottom="20px">
          Ut adipisicing anim ullamco proident french fries id onion rings
          patty. Ipsum curly fries do ut consequat est juicy occaecat.
        </ParagraphStyled>

        <ParagraphStyled
          marginBottom="40px
          "
        >
          Ad nulla dolor chicken wrap. Honey mustard aliqua mayo proident. Id
          sesame seed bun non fugiat.
        </ParagraphStyled>

        {formSent ? (
          <ReservationConfirmed>
            <ReservationConfirmedTitle>
              Reservation confirmed
            </ReservationConfirmedTitle>
            <ReservationInfo>
              <li>
                <span>Name:</span> {formData.fullName}
              </li>
              <li>
                <span>Phone:</span> {formData.phone}
              </li>
              <li>
                <span>Number of seats:</span> {formData.numPeople}
              </li>
              <li>
                <span>Date:</span> {formData.date.toLocaleDateString()}
              </li>
              <li>
                <span>Hour:</span> {formData.hour}
              </li>
            </ReservationInfo>
          </ReservationConfirmed>
        ) : (
          <FormStyled onSubmit={handleSubmit(handleOnSubmit)}>
            <Grid gap="20px" justifyContent="center" alignItems="center">
              <Input
                label="Full name:"
                type="text"
                placeholder="John Doe"
                {...register('fullName')}
                error={errors.fullName?.message}
              />
              <FieldsetStyled>
                <Input
                  label="Phone:"
                  type="tel"
                  placeholder="(xx) 00000-0000"
                  {...register('phone')}
                  error={errors.phone?.message}
                />

                <Input
                  label="Number of people:"
                  type="number"
                  placeholder="1"
                  min={1}
                  max={8}
                  {...register('numPeople')}
                  error={errors.numPeople?.message}
                />
              </FieldsetStyled>
              <FieldsetStyled>
                <Input
                  label="Date:"
                  type="date"
                  {...register('date')}
                  error={errors.date?.message}
                />

                <Input
                  label="Hour:"
                  type="time"
                  {...register('hour')}
                  min="14:00"
                  max="22:00"
                  error={errors.hour?.message}
                />
              </FieldsetStyled>
              <ButtonStyled>Confirm</ButtonStyled>
            </Grid>
          </FormStyled>
        )}
      </div>

      <div>
        <img
          src="https://raw.githubusercontent.com/Luciana-Santos/slice-of-spice/main/public/assets/img/reservation-img.jpg"
          alt="Reservations image"
        />
      </div>
    </ReservationsStyled>
  );
};
export default Reservations;
