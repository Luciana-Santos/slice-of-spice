import { Container, Grid } from '../../GlobalStyles';
import { ButtonStyled } from '../UI/Button.styled';
import Input from '../UI/Input';
import { FieldsetStyled } from '../UI/Input.styled';
import { ParagraphStyled } from '../UI/Paragraph.styled';
import { TitlesStyled } from '../UI/Titles.styled';
import { ReservationsStyled } from './Reservations.styled';

const Reservations = () => {
  return (
    <ReservationsStyled>
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

        <form>
          <Grid gap="20px" justifyContent="center" alignItems="center">
            <Input
              label="Full name:"
              id="name"
              type="text"
              placeholder="John Doe"
            />
            <FieldsetStyled>
              <Input
                label="Phone:"
                id="phone"
                type="tel"
                placeholder="000-000-000"
              />
              <Input label="Number of people:" type="number" placeholder="3" />
            </FieldsetStyled>
            <FieldsetStyled>
              <Input
                label="Date:"
                type="date"
                value="03/12/2022"
                min="03/12/2022"
                max="03/02/2023"
              />
              <Input
                label="Hour:"
                type="time"
                id="hour"
                min="14:00"
                max="22:00"
              />
            </FieldsetStyled>
            <ButtonStyled>Confirm</ButtonStyled>
          </Grid>
        </form>
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
