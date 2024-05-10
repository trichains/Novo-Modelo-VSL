import Container from '../Container/Container';

// Componente principal que contém a lógica do modal e a imagem do produto
const ProductModal = () => {
  return (
    <div className="bg-white pt-4 px-4 pb-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          {/* Imagem que, ao clicar, abre o modal */}
          <div
            className="w-full md:w-2/4 relative flex flex-col items-center justify-center cursor-pointer"
            onClick={() => document.getElementById('label-modal').showModal()}>
            <img
              src="/assets/product-modal/bottle-label.webp"
              alt="FloraSlim"
              className="w-full object-cover cursor-pointer bg-black"
            />

            {/* Ícone de lupa centralizado sobre a imagem */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-3xl bg-amber-400 hover:bg-amber-500 text-black font-bold p-4 rounded-lg transition-colors duration-300 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Dialog modal */}
          <dialog id="label-modal" className="modal">
            <div className="modal-box w-full flex flex-col items-center justify-center md:max-w-screen-xl relative bg-white">
              <img
                src="/assets/product-modal/labelFloraSlim.png"
                alt="Supplement Facts"
                className="mt-4 hidden md:flex object-cover hover:shadow-2xl transition-shadow duration-300"
              />
              <img
                src="/assets/product-modal/mobile-labelFloraSlim.png"
                alt="Supplement Facts"
                className="mt-4 w-96 md:hidden object-cover"
              />
              {/* Botão de fechar o modal */}
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 text-3xl">
                  &times;
                </button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              {/* Área clicável para fechar o modal ao clicar fora do conteúdo */}
              <button>close</button>
            </form>
          </dialog>
        </div>
      </Container>
    </div>
  );
};

export default ProductModal;
