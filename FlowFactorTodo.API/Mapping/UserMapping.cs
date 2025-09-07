using System;
using FlowFactorTodo.API.Entities;
using FlowFactorTodo.API.Dtos;

namespace FlowFactorTodo.API.Mapping;

public static class UserMapping
{
    public static UserDTO ToDto(this User user)
    {
        return new UserDTO
        (
            user.Id,
            user.FirstName,
            user.LastName
        );
    }
}
