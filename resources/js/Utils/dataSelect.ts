
const roleUser = [
    { value: "admin", label: "Administrador" },
    { value: "user", label: "Usuário" },
];

const statusUser = [
    { value: "active", label: "Ativo" },
    { value: "inactive", label: "Inativo" },
];

const statusClient = [
    { value: "active", label: "Ativo" },
    { value: "waiting", label: "Aguardando" },
    { value: "suspended", label: "Suspenso" },
    { value: "canceled", label: "Cancelado" },
];

export {
    statusUser,
    roleUser,
    statusClient
};
