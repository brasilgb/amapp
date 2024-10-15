const statusUserByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Ativo";
        case 2:
            return "Inativo";
    }
};

const roleUserByValue = (value: any) => {
    switch (value) {
        case 'admin':
            return "Administrador";
        case 'user':
            return "Usuário";
    }
};

const statusValueByLabel = (value: any) => {
    switch (value) {
        case 'active':
            return "Ativo";
        case 'waiting':
            return "Aguardando";
        case 'suspended':
            return "Suspenso";
        case 'canceled':
            return "Cancelado";
    }
};




export {
    statusUserByValue,
    roleUserByValue,
    statusValueByLabel
};
