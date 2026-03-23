import Select from "react-select";

const options = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-[7px]">
      <div className="w-full h-full  flex justify-center items-center p-4">
        <section className="bg-[#D9D9D9] w-full max-w-lg rounded-3xl p-8 shadow-md relative ">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Adicionando novo requisito:</h2>
            <button
              onClick={onClose}
              className="text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          <hr className="border-gray-400 mb-6" />

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold ml-2">Título</label>
              <input
                type="text"
                placeholder="Ex: requisito ABC..."
                className="w-full p-2 px-4 rounded-full border border-gray-400 bg-gray-100 outline-none"
              />
            </div>

            <div className="flex gap-4">
              <Select options={options} isMulti />
              <Select options={options} isMulti />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-sm font-semibold ml-2">
                  Interpretação técnica:
                </label>
                <textarea className="w-full h-20 p-3 rounded-2xl border border-gray-400 bg-gray-100 resize-none outline-none" />
              </div>

              <div>
                <label className="text-sm font-semibold ml-2">
                  Abordagens aceitáveis:
                </label>
                <textarea className="w-full h-20 p-3 rounded-2xl border border-gray-400 bg-gray-100 resize-none outline-none" />
              </div>

              <div>
                <label className="text-sm font-semibold ml-2">
                  Pontos de atenção:
                </label>
                <textarea className="w-full h-20 p-3 rounded-2xl border border-gray-400 bg-gray-100 resize-none outline-none" />
              </div>
            </div>

            <button className="w-full bg-[#801D33] text-white cursor-pointer font-bold py-3 mt-4 rounded-xl hover:opacity-90 transition-opacity">
              Cadastrar novo requisito
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
