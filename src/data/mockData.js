export const mockCustomer = {
  firstName: "Fernando",
  name: "Fernando Ernerto",
  initials: "FE",
  cpf: "123.456.789-00",
  birthDate: "12/04/1972",
  civilStatus: "Casado",
  customerSince: 2018,
  address: {
    street: "Al. Rio Negro - Alphaville",
    number: "161",
    zipCode: "06454-000",
    city: "Barueri",
    state: "SP",
  },
  contacts: {
    email: "fernando.ernerto@email.com",
    phone: "(11) 99876-5432",
  },
};

export const mockPlan = {
  name: "TOTAL+",
  status: "active",
  monthlyAmount: "R$ 79,90",
  contract: "BP-2018-0315-248197",
  startDate: "15/03/2018",
  nextDueDate: "10/10/2026",
  cardNumber: "BP-248197-22",
};

export const mockBeneficiaries = [
  { id: "fernando", name: "Fernando Ernerto", role: "Titular", number: "BP-248197-22", benefitCode: "BP 9284 7712" },
  { id: "joao", name: "João da Silva", role: "Cônjuge", number: "BP-248197-23", benefitCode: "BP 9284 7713" },
  { id: "ana", name: "Ana da Silva", role: "Filha", number: "BP-248197-24", benefitCode: "BP 9284 7714" },
  { id: "lucas", name: "Lucas da Silva", role: "Filho", number: "BP-248197-25", benefitCode: "BP 9284 7715" },
];

export const mockBilling = {
  current: {
    month: "OUTUBRO 2026",
    dueDate: "10/10/2026",
    dueDateISO: "2026-10-10",
    dueShort: "10 OUT",
    daysUntilDue: 9,
    amount: "R$ 79,90",
    // Dados fictícios, mas com DVs e fator de vencimento válidos (FEBRABAN, fator 1595 = 10/10/2026).
    barcode: "23793.81284 60082.118500 40749.510091 1 15950000007990",
    barcodeDigits: "23793812846008211850040749510091115950000007990",
    // BR Code estruturalmente válido (CRC16 correto) com chave aleatória inexistente.
    pixCode: "00020126580014br.gov.bcb.pix01365f8e2b7a-1c4d-4e9a-9b3f-0d6c2a8e4b71520400005303986540579.905802BR5916GRUPO BOM PASTOR6007BARUERI62130509BP2026OUT6304D609",
  },
  paid: [
    { month: "SET 2026", amount: "R$ 79,90", paidAt: "08/09", method: "Pix" },
    { month: "AGO 2026", amount: "R$ 79,90", paidAt: "07/08", method: "Boleto" },
    { month: "JUL 2026", amount: "R$ 79,90", paidAt: "09/07", method: "Pix" },
  ],
  yearSummary: { year: 2026, payments: 9, total: "R$ 719,10", period: "Janeiro a setembro" },
};

export const mockCommunications = [
  { category: "financeiro", unread: true, label: "FINANCEIRO", title: "Boleto disponível", message: "Sua mensalidade de outubro vence em 10/10.", time: "há 2h" },
  { category: "bommed", unread: true, label: "BOMMED", title: "Nova guia autorizada", message: "Guia médica autorizada para Dr. Paulo Andrade.", time: "ontem" },
  { category: "notice", unread: false, label: "CADASTRO", title: "Telefone confirmado", message: "Seu novo telefone foi verificado com sucesso.", time: "2 dias" },
  { category: "notice", unread: false, label: "COMUNICADO", title: "Novo benefício disponível", message: "Conheça as novas vantagens para titulares.", time: "5 dias" },
];

export const mockGuides = [
  { date: "18 SET", specialty: "Cardiologia", professional: "Dr. Paulo Andrade", id: "BP-2026-0918", beneficiary: "Fernando Ernerto", discount: "35%" },
  { date: "03 SET", specialty: "Clínico geral", professional: "Dra. Lúcia Mendes", id: "BP-2026-0903", beneficiary: "Fernando Ernerto", discount: "30%" },
  { date: "22 AGO", specialty: "Exame laboratorial", professional: "Lab Bom Pastor", id: "BP-2026-0822", beneficiary: "Fernando Ernerto", discount: "25%" },
];

// Catálogo da rede BomMed por tipo de atendimento (dados de demonstração).
export const mockGuideCatalog = [
  { category: "Consulta", specialty: "Cardiologia" },
  { category: "Consulta", specialty: "Cardiologia", professional: "Dr. Paulo Andrade" },
  { category: "Consulta", specialty: "Clínico geral" },
  { category: "Consulta", specialty: "Clínico geral", professional: "Dra. Lúcia Mendes" },
  { category: "Consulta", specialty: "Dermatologia" },
  { category: "Consulta", specialty: "Pediatria" },
  { category: "Exames", specialty: "Exame laboratorial", professional: "Lab Bom Pastor" },
  { category: "Exames", specialty: "Hemograma completo" },
  { category: "Exames", specialty: "Ultrassonografia" },
  { category: "Exames", specialty: "Raio-X" },
  { category: "Terapias", specialty: "Fisioterapia" },
  { category: "Terapias", specialty: "Psicologia" },
  { category: "Terapias", specialty: "Fonoaudiologia" },
  { category: "Terapias", specialty: "Nutrição" },
  { category: "Procedimentos", specialty: "Pequenos procedimentos ambulatoriais" },
  { category: "Procedimentos", specialty: "Vacinação" },
  { category: "Procedimentos", specialty: "Endoscopia" },
  { category: "Outros", specialty: "Odontologia" },
  { category: "Outros", specialty: "Óptica" },
  { category: "Outros", specialty: "Farmácia" },
];

export const mockAppData = {
  customer: mockCustomer,
  plan: mockPlan,
  beneficiaries: mockBeneficiaries,
  billing: mockBilling,
  communications: mockCommunications,
  guides: mockGuides,
  guideCatalog: mockGuideCatalog,
};
