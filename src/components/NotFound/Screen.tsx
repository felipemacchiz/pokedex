import { useNavigate } from "react-router";
import NotFound from ".";
import Button from "../Button";

const NotFoundScreen = () => {
  const navigate = useNavigate();

  return (
    <NotFound className="h-dvh">
      <div>
        <Button
          text="Voltar para listagem de pokémons"
          onClick={() => navigate('/')}
        />
      </div>
    </NotFound>
  )
}

export default NotFoundScreen;
